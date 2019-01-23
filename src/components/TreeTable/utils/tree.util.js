export const flatListToTree = (items) => {
	if (!items) {
		return null;
	}
	const roots = [];
	const childrenMap = {}; // parentId => list of children
	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		if (!item.parentId) {
			item.visible = true;
			roots.push(item);
		} else {
			item.visible = true;
			let children = childrenMap[item.parentId] || [];
			children.push(item);
			childrenMap[item.parentId] = children;
		}
	}

	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		item.children = childrenMap[item.id];
	}

	return roots;
};
