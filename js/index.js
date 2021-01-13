$(document).ready(function(){
    let vm = new Vue({
        el: '#table',     
        data: {
            items:[],
        },
        created() {
            var cors = 'https://cors-anywhere.herokuapp.com/';
            var url = 'https://gis.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.json';
            fetch( cors+url, {method: 'GET'})
                .then(function(response) {
                    response.json().then(
                        function(res){
                            console.log(res);
                            let data = res.XML_Head.Infos.Info;
                            for(let i = 0; i < data.length;i++){
                                vm.items.push({
                                        'Region':data[i].Region,
                                        'Town':data[i].Town,
                                        'Name':data[i].Name
                                })
                            }
                        }
                    )
                }).catch(function(err) {
                    console.log('error')
                });
        },
        components: {
            'tr-component':{
                props: ["items"],
                template:`
                    <table id="table">
                        <tr v-for="item in items">
                            <td>{{item.Region}}</td>
                            <td>{{item.Town}}</td>
                            <td>{{item.Name}}</td>
                        </tr>
                    </table>`,
            },
        },
    });
});


