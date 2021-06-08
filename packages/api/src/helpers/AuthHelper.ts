import querystring from "querystring";
import axios from "axios";

export class AuthHelper {
  public async fetchGitHubUser(code: string) {
    const githubAccessToken = await axios
      .post(
        `https://github.com/login/oauth/access_token?client_id=${process.env.MAILWIND_GITHUB_CLIENT_ID}&client_secret=${process.env.MAILWIND_GITHUB_CLIENT_SECRET}&code=${code}`
      )
      .then((res) => res.data)

      .catch((error) => {
        throw error;
      });

    const decoded = querystring.parse(githubAccessToken);
    const accessToken = decoded.access_token;

    return axios
      .get("https://api.github.com/user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => res.data)
      .catch((error) => {
        console.error(`Error getting user from GitHub`);
        throw error;
      });
  }
}
