export function queryParser(query) {
    query = query.replace(/ /g, '+')
    return query
}

