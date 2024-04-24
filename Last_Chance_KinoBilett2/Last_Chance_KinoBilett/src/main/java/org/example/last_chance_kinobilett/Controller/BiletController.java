package org.example.last_chance_kinobilett.Controller;

import org.example.last_chance_kinobilett.Entity.Bilet;
import org.example.last_chance_kinobilett.Repository.BiletRepostory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BiletController {
    @Autowired
    private BiletRepostory biletRepostory;
    @PostMapping("/saveBilet")
    public void saveBilet( Bilet bilet){biletRepostory.save(bilet);}
    @GetMapping("/hentBiletter")
    public List<Bilet> hentBiletter(){return biletRepostory.hentAll();}
    @GetMapping("/sletBiletter")
    public void sletBiletter(){ biletRepostory.slet();}
    @GetMapping("/hentBiletet")
    public Bilet henteEnMotorvogn(int id)  {return biletRepostory.hent(id);}
    @PostMapping("/endre")
    public void endre(Bilet bilet){biletRepostory.updateBilettet(bilet);}
    @GetMapping("/slettBilettet")
    public void slettEnMotorvogn(int id) {biletRepostory.slettBiletet(id);}

}
