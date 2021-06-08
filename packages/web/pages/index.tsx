import Layout from "../components/Layout";
import Link from "next/link";

const url = `https://github.com/login/oauth/authorize?client_id=${process.env.MAILWIND_GITHUB_CLIENT_ID}&redirect_uri=${process.env.MAILWIND_GITHUB_REDIRECT_URL}?path=/&scope=user:email`;

const IndexPage = () => (
  <Layout>
    <a href={url}>Login with GitHub</a>
  </Layout>
);

export default IndexPage;
