rs.initiate( {
  _id: "replica01",
  members: [
    { _id: 0, host: "192.168.40.100:27017" }
  ]
});
rs.add("192.168.40.130:27017");
rs.add("192.168.40.160:27017");
