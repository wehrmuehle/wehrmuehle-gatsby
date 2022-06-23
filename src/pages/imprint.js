import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import {useBreakpoint} from 'gatsby-plugin-breakpoints';

const Wrapper = styled("div")`


  overflow-wrap: break-word;  

  padding-bottom: 100px;





& h1 {
    margin: 80px 0 60px;
}

& h2 {
    margin: 40px 0 30px;
}


@media (min-width: 490px) {
    overflow-wrap: break-word;  

padding-bottom: 200px;



& h1 {
  margin: 120px 0 60px;
}

& h2 {
  margin: 80px 0 20px;
}
      }



`
export default function ImpressumPage() {
    return (
        <Wrapper>
            <h1>Impressum</h1>

            <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
            <p>Wehrmuehle GmbH<br/>
                Wehrm&uuml;hlenweg 8<br/>
                16359 Biesenthal</p>

            <p>Handelsregister: 1234567<br/>
                Registergericht: Amtsgericht Charlottenburg</p>

            <p>
                <strong>Vertreten durch:</strong><br/>
                Tjioe Meyer</p>

            <h2>Kontakt</h2>
            <p>Telefon: 00447776809197<br/>
                E-Mail: tm@wehmuehle.com</p>

            <h2>Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
                Umsatzsteuergesetz:<br/>
                DE1234567890</p>

            <h2>EU-Streitschlichtung</h2>
            <p>Die Europ&auml;ische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
                <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br/>
                Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

            <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
                einer Verbraucherschlichtungsstelle teilzunehmen.</p>

            <p>Quelle:
                <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a>
            </p>
        </Wrapper>
    )
}
