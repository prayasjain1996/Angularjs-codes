app.factory("myfactory",($http,$q)=>{
    var object = {
        callserver:(searchparam)=>{
            var pr = $q.defer();
            var url = "http://api.apixu.com/v1/current.json?key=5b3d516cf6124ff692f42420172706&q="+searchparam+""
            $http.get(url).then(function(data){
                pr.resolve(data.data.current);
            }
                                ,function(err){
                pr.reject(err)
            });
            return pr.promise;
        }
        
    }
    return object;
});