import "modern-css-reset";
import { useStaticQuery, graphql } from "gatsby";

const useLinks = () => {
  const data = useStaticQuery(graphql`
    {
      r02 {
        links {
          id
          name
          url
        }
      }
    }
  `);

  return data.r02.links;
};

const Layout = ({ children }) => {
  const links = useLinks();

  console.log(links);

  return children;
};

export default Layout;
