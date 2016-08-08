function(doc) {
    var cast = function(mold, he) {
        var casted = {}
        var topKeys = Object.keys(mold).sort()
            // if (he.length > topKeys.length) { console.error('Warning: extraneous data on top.') }
        topKeys.forEach(function(k, nk) {
            casted[k] = {}
            var midKeys = Object.keys(mold[k]).sort()
                // if (he[nk].length > midKeys.length) { console.error('Warning: extraneous data at ', k) }
            midKeys.forEach(function(m, nm) {
                var ns = 0
                casted[k][m] = {}
                var bottomKeys = Object.keys(mold[k][m]).sort()
                bottomKeys.forEach(function(s) {
                        if (s === 'description') {
                            casted[k][m][s] = mold[k][m][s]
                        } else {
                            if (typeof he[nk][nm][ns] === 'undefined') {
                                // console.error('Warning: missing data at ', k, m, s)
                            } else {
                                casted[k][m][s] = he[nk][nm][ns]
                            }
                            ++ns
                        }
                    })
                    // if (typeof he[nk][nm][ns] !== 'undefined') { console.error('Warning: extraneous data at ', k, m, ns) }
            })
        })
        return casted
    }

    if (doc._id.indexOf('src:0')) {
        return
    }

    var casted = cast({
        "couchdb": {
            "auth_cache_misses": {
                "description": "number of authentication cache misses",
                "current": 21.0,
                "sum": 21.0,
                "mean": 0.0,
                "stddev": 0.0010000000000000000208,
                "min": 0,
                "max": 1
            },
            "open_databases": {
                "description": "number of open databases",
                "current": 17.0,
                "sum": 17.0,
                "mean": 0.0,
                "stddev": 0.0010000000000000000208,
                "min": -1,
                "max": 3
            },
            "auth_cache_hits": {
                "description": "number of authentication cache hits",
                "current": 13496.0,
                "sum": 13496.0,
                "mean": 0.0010000000000000000208,
                "stddev": 0.050000000000000002776,
                "min": 0,
                "max": 26
            },
            "open_os_files": {
                "description": "number of file descriptors CouchDB has open",
                "current": 44.0,
                "sum": 44.0,
                "mean": 0.0,
                "stddev": 0.0020000000000000000416,
                "min": -2,
                "max": 6
            },
            "database_writes": {
                "description": "number of times a database was changed",
                "current": 1768.0,
                "sum": 1768.0,
                "mean": 0.0,
                "stddev": 0.044999999999999998335,
                "min": 0,
                "max": 57
            },
            "database_reads": {
                "description": "number of times a document was read from a database",
                "current": 812692.0,
                "sum": 812692.0,
                "mean": 0.029000000000000001471,
                "stddev": 0.41899999999999998357,
                "min": 0,
                "max": 617
            },
            "request_time": {
                "description": "length of a request inside CouchDB without MochiWeb",
                "current": 199162877.87099999189,
                "sum": 199162877.87099999189,
                "mean": 839.3790000000000191,
                "stddev": 4845.8149999999995998,
                "min": 0.0,
                "max": 955037.0
            }
        },
        "httpd_status_codes": {
            "409": {
                "description": "number of HTTP 409 Conflict responses",
                "current": 3.0,
                "sum": 3.0,
                "mean": 0.0,
                "stddev": 0.0020000000000000000416,
                "min": 0,
                "max": 1
            },
            "412": {
                "description": "number of HTTP 412 Precondition Failed responses",
                "current": null,
                "sum": null,
                "mean": null,
                "stddev": null,
                "min": null,
                "max": null
            },
            "202": {
                "description": "number of HTTP 202 Accepted responses",
                "current": 4.0,
                "sum": 4.0,
                "mean": 0.0,
                "stddev": 0.0040000000000000000833,
                "min": 0,
                "max": 1
            },
            "404": {
                "description": "number of HTTP 404 Not Found responses",
                "current": 10401.0,
                "sum": 10401.0,
                "mean": 0.0,
                "stddev": 0.026999999999999999695,
                "min": 0,
                "max": 16
            },
            "304": {
                "description": "number of HTTP 304 Not Modified responses",
                "current": 13071.0,
                "sum": 13071.0,
                "mean": 0.0,
                "stddev": 0.035000000000000003331,
                "min": 0,
                "max": 21
            },
            "200": {
                "description": "number of HTTP 200 OK responses",
                "current": 241659.0,
                "sum": 241659.0,
                "mean": 0.00899999999999999932,
                "stddev": 0.11600000000000000588,
                "min": 0,
                "max": 60
            },
            "201": {
                "description": "number of HTTP 201 Created responses",
                "current": 471.0,
                "sum": 471.0,
                "mean": 0.0,
                "stddev": 0.0070000000000000001457,
                "min": 0,
                "max": 4
            },
            "500": {
                "description": "number of HTTP 500 Internal Server Error responses",
                "current": 39.0,
                "sum": 39.0,
                "mean": 0.0,
                "stddev": 0.0010000000000000000208,
                "min": 0,
                "max": 2
            },
            "301": {
                "description": "number of HTTP 301 Moved Permanently responses",
                "current": 9.0,
                "sum": 9.0,
                "mean": 0.0,
                "stddev": 0.0010000000000000000208,
                "min": 0,
                "max": 1
            },
            "403": {
                "description": "number of HTTP 403 Forbidden responses",
                "current": 16.0,
                "sum": 16.0,
                "mean": 0.0,
                "stddev": 0.0010000000000000000208,
                "min": 0,
                "max": 2
            },
            "401": {
                "description": "number of HTTP 401 Unauthorized responses",
                "current": 329.0,
                "sum": 329.0,
                "mean": 0.0,
                "stddev": 0.0040000000000000000833,
                "min": 0,
                "max": 1
            },
            "405": {
                "description": "number of HTTP 405 Method Not Allowed responses",
                "current": 91.0,
                "sum": 91.0,
                "mean": 0.0,
                "stddev": 0.0030000000000000000625,
                "min": 0,
                "max": 6
            },
            "400": {
                "description": "number of HTTP 400 Bad Request responses",
                "current": 3412.0,
                "sum": 3412.0,
                "mean": 0.0,
                "stddev": 0.017000000000000001221,
                "min": 0,
                "max": 11
            }
        },
        "httpd_request_methods": {
            "PUT": {
                "description": "number of HTTP PUT requests",
                "current": 662.0,
                "sum": 662.0,
                "mean": 0.0,
                "stddev": 0.00899999999999999932,
                "min": 0,
                "max": 8
            },
            "GET": {
                "description": "number of HTTP GET requests",
                "current": 522176.0,
                "sum": 522176.0,
                "mean": 0.018999999999999999528,
                "stddev": 0.24799999999999999822,
                "min": 0,
                "max": 113
            },
            "POST": {
                "description": "number of HTTP POST requests",
                "current": 3968.0,
                "sum": 3968.0,
                "mean": 0.0,
                "stddev": 0.032000000000000000666,
                "min": 0,
                "max": 16
            },
            "DELETE": {
                "description": "number of HTTP DELETE requests",
                "current": 24.0,
                "sum": 24.0,
                "mean": 0.0,
                "stddev": 0.0010000000000000000208,
                "min": 0,
                "max": 2
            },
            "HEAD": {
                "description": "number of HTTP HEAD requests",
                "current": 4160.0,
                "sum": 4160.0,
                "mean": 0.0,
                "stddev": 0.021000000000000001305,
                "min": 0,
                "max": 16
            },
            "COPY": {
                "description": "number of HTTP COPY requests",
                "current": null,
                "sum": null,
                "mean": null,
                "stddev": null,
                "min": null,
                "max": null
            }
        },
        "httpd": {
            "clients_requesting_changes": {
                "description": "number of clients for continuous _changes",
                "current": 0,
                "sum": 0,
                "mean": 0.0,
                "stddev": 0.012999999999999999403,
                "min": -1,
                "max": 2
            },
            "requests": {
                "description": "number of HTTP requests",
                "current": 531041.0,
                "sum": 531041.0,
                "mean": 0.018999999999999999528,
                "stddev": 0.25200000000000000178,
                "min": 0,
                "max": 104
            },
            "view_reads": {
                "description": "number of view reads",
                "current": 11.0,
                "sum": 11.0,
                "mean": 0.0,
                "stddev": 0.0010000000000000000208,
                "min": 0,
                "max": 1
            },
            "temporary_view_reads": {
                "description": "number of temporary view reads",
                "current": null,
                "sum": null,
                "mean": null,
                "stddev": null,
                "min": null,
                "max": null
            },
            "bulk_requests": {
                "description": "number of bulk requests",
                "current": 131.0,
                "sum": 131.0,
                "mean": 0.0,
                "stddev": 0.0030000000000000000625,
                "min": 0,
                "max": 5
            }
        }
    }, doc.data)
    var r
    var t
    var g
    var k
    for (r in casted) {
      for (t in casted[r]) {
        if (!casted[r][t].current) { break }
        g = doc._id.split(':')
        k = [g[1], r, t, new Date(parseInt(g[2], 10)).toISOString()]
        emit(k, casted[r][t].current)
      }
    }
}
