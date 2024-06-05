function formatFeatures(features) {
  const paragraphs = features.split("\n\n");
  return paragraphs.map((paragraph, index) => <p key={index} className="font-normal text-charcoal-gray/60 text-[15px] leading-6">{paragraph}</p>);
}

export default formatFeatures;
