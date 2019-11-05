let loadedTypes = {}

export const Components = {
	getComponentByType: componentType => loadedTypes[componentType],
	setLoaded: (componentType, componentClass) => loadedTypes[componentType] = componentClass,
}
