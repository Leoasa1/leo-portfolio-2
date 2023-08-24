const documentToArticleMapper = (doc) => {
	return {
		slug: doc.uid || "",
		title: doc.data.title || "",
		description: doc.data.description || [],
		project_url: doc.data.project_url.url || "",
		images: doc.data.images || []
	};
};

export default documentToArticleMapper;
