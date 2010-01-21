function(head, req) {
    var row;
    while (row = getRow()) send(row.key + "\n");
}