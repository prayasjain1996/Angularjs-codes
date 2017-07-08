app.factory("myfactory",($http,$q)=>{
    var object = {
        callserver:(searchparam)=>{
            var pr = $q.defer();
            var url = "http://api.giphy.com/v1/gifs/search?q="+searchparam+"&api_key=eb0798fb6b4b4534b107be86ab01624e"
            $http.get(url).then(function(data){
                pr.resolve(data.data.data);
            }
                                ,function(err){
                pr.reject(err)
            });
            return pr.promise;
        }
        
    }
    return object;
});