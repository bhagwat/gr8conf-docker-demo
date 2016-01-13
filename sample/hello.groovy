@RestController
class Application{
    @RequestMapping(path="/")
    public Map hello(){
        return ["Topic": "Dockerize it all", "Message": "Hello GR8Conf-IN 2016!!!"]
    }
}

