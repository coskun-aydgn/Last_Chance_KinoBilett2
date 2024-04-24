package org.example.last_chance_kinobilett.Controller;

import org.example.last_chance_kinobilett.Entity.Film;
import org.example.last_chance_kinobilett.Repository.FilmRepostory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
public class FilmController {
    @Autowired
    private FilmRepostory filmRepostory;
    @GetMapping("/hentfilms")
    public List<Film> hentFilms() {return filmRepostory.hentFilms();}
}
