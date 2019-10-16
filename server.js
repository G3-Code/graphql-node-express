var express = require("express");
var express_graphql = require("express-graphql");
var { buildSchema } = require("graphql");

// GraphQL schema

var schema = buildSchema(`
type Query{
    message: String!
}`);
