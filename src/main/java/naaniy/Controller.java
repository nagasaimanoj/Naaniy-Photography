package naaniy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class Controller {

    @Autowired
    private CustomerRepository repo;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView hello() {
        return new ModelAndView("index.html");
    }
}