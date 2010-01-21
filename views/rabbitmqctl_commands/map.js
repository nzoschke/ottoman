function(doc) {
	if (doc.amqp_uri) {
        // parse URI to emit rabbitmqctl commands:
        // rabbitmqctl add_user adam SLIUersl398ELSj
        // rabbitmqctl add_vhost /adam
        // rabbitmqctl set_permissions -p /adam adam '.*' '.*' '.*'

        // URI regex from http://blog.stevenlevithan.com/archives/parseuri
        var uriRegex = /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var match = uriRegex.exec(doc.amqp_uri);
        var c1 = "rabbitmqctl add_user " + match[4] + " " + match[5];
        var c2 = "rabbitmqctl add_vhost " + match[8];
        var c3 = "rabbitmqctl set_permissions -p " + match[8] + " " + match[4] + " '.*' '.*' '.*'";
        emit(c1, c1);
        emit(c2, c2);
        emit(c3, c3);
    }
}