import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share Prompts
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-powered Prompts</span>
      </h1>

      <p className="desc text-center">
        Promptly is an open-source AI prompting tool to create, share and
        discover creative and useful AI prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
