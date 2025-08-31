const ClaudeRenderData = ({ recipe }) => {
  return (
    <section
      className="recipe-section"
      dangerouslySetInnerHTML={{ __html: recipe }}
    />
  );
};
export default ClaudeRenderData;
