function(doc) {
    if (doc.amqp_uri) emit(doc.amqp_uri, doc.amqp_uri)
}
