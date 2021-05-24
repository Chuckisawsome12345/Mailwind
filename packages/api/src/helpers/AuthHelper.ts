import { logger } from "../config/Logger";
import querystring, { ParsedUrlQuery } from "querystring";
import axios from "axios";

export class AuthHelper {
  public async fetchGitHubUser({ code }: { code: string }) {
    const githubToken = await axios
      .post(
        `https://github.com/login/oauth/access_token?client_id=${process.env.JAIT_GITHUB_CLIENT_ID}&client_secret=${process.env.JAIT_GITHUB_CLIENT_SECRET}&code=${code}`
      )
      .then((res) => res.data)

      .catch((error) => {
        throw new Error(error);
      });

    const decoded: ParsedUrlQuery = querystring.parse(githubToken);
    const accessToken = decoded.access_token;

    return axios
      .get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        logger.error(`Error getting user from GitHub`);

        throw new Error(error);
      });
  }
}
