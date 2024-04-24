package org.example.last_chance_kinobilett.Repository;

import org.example.last_chance_kinobilett.Entity.Bilet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BiletRepostory {
    @Autowired
    private JdbcTemplate db;


    public void save(Bilet bilet) {
        String sql="insert into Bilets(filmNavn,antall,fornavn, etternavn, telefonNr, epost) values(?,?,?,?,?,?)";
        db.update(sql,bilet.getFilmNavn(),bilet.getAntall(),bilet.getFornavn(),bilet.getEtternavn(),bilet.getTelefonNr(),bilet.getEpost());
    }
    public List<Bilet> hentAll() {
        String sql="select * from Bilets Order by etternavn asc ";
        return db.query(sql, new BeanPropertyRowMapper<Bilet>(Bilet.class));
    }
    public void slet(){
        String sql="delete from Bilets";
        db.update(sql);
    }
    public Bilet hent(int id) {
        String sql="select * from Bilets where id=?";
        List<Bilet> enBilet=db.query(sql, new BeanPropertyRowMapper<>(Bilet.class),id );
        return enBilet.get(id-1);

    }
    public void updateBilettet(Bilet b) {
        String sql="Update Bilets set filmNavn=?, antall=?, fornavn=?, etternavn=?,telefonNr=?, epost=? where id=?";
            db.update(sql,b.getFilmNavn(),b.getAntall(),b.getFornavn(),b.getEtternavn(),
                    b.getTelefonNr(), b.getEpost(),b.getId());



    }

    public void slettBiletet(int id) {
        String sql = "DELETE FROM Bilets WHERE id=?";
            db.update(sql,id);
    }

}
