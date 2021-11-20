import { createClient } from "contentful";

export async function getStaticProps() {
  
    const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "menuItem" });

  return {
    props: {
      menuItems: res,
    },
  };
}

export default function MenuPageCont({ menuItems }) {
  console.log(menuItems);
  return (
    <div>
      <h1>Contentful Data</h1>
    </div>
  );
}
