import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  const links = getLinks(data);

  return (
    <Layout>
      <ul>
        {links.map((l) => (
          <li key={l.id}>
            <a href={l.url}>{l.name}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

const getLinks = (data) => data.r02.links;

export const query = graphql`
  {
    r02 {
      links {
        id
        name
        url
      }
    }
  }
`;

export default IndexPage;
