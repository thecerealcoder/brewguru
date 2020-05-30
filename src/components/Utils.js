//function separated for JEST testing purposes

export function queryParser(query) {
	query = query.replace(/ /g, "+");
	return query;
}
