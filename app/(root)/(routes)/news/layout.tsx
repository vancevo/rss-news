const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>News</p>
      <div>{children}</div>
    </div>
  );
};

export default NewsLayout;
