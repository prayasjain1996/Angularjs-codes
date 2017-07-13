app.factory("myfactory",()=>{
           var obj ={
        add(){ 
            var product ={"shoes":[{Name:'Puma',Price:1000,Images:"imaes/index.jpg"},{Name:'Nike',Price:2000,Images:"imaes/index1.jpg"}],"mobiles":[{Name:'Samsung',Price:12000,Images:"imaes/mob1.jpeg"},{Name:'Nokia',Price:7200,Images:"imaes/mob2.jpeg"}]}
                    return product;
                    },
                    ShoesList(){
                    var a = this.add().shoes;
                
                        return a;
                    console.log(a);
                    
                    },
               mobilesList(){
                var b = this.add().mobiles;
                   return b;
               }
           }
                    
          return obj;
            
        });