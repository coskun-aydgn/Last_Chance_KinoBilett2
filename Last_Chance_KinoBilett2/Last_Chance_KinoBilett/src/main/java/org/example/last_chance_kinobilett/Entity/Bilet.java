package org.example.last_chance_kinobilett.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Bilet {
    private String filmNavn, etternavn, fornavn, telefonNr, epost;
    private int antall,id;

}
