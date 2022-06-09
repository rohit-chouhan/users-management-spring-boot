package com.rohitchouhan.user_management;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Controller
public class Home {

    @Autowired
    private UserService service;

    @RequestMapping(value = "/single")
    @ResponseBody
    public Optional<Users> findById(@RequestParam Integer id) {
        return service.findById(id);
    }

    @RequestMapping(value = "/")
    public String index(Model md) {
        md.addAttribute("users", service.findAll());
        return "user";
    }

    @PostMapping(value = "/save")
    public ResponseEntity<Users> create(@RequestBody Users users) throws URISyntaxException {
        Users data = service.save(users);
        if (data == null) {
            return ResponseEntity.notFound().build();
        } else {
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(data.getId())
                    .toUri();

            return ResponseEntity.created(uri).body(data);
        }
    }

    @DeleteMapping(path="/delete")
    @ResponseBody
    public Integer processForm(@RequestParam Integer id) {
        service.deleteById(id);
        return id;
    }

    @PutMapping(path="/update")
    public void updateUser(@RequestBody Users u) {
        service.save(u);
    }
}
