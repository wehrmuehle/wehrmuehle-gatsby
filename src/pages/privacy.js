import React from 'react'
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import {useBreakpoint} from 'gatsby-plugin-breakpoints';

const Wrapper = styled("div")`


  overflow-wrap: break-word;  

  padding-bottom: 100px;

  font-size: 18px;




  & li {
    font-size: 18px;
}

& h1 {
    margin: 80px 0 60px;
}

& h2 {
    margin: 40px 0 30px;
}
& h3 {
    margin: 25px 0 15px;
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
export default function PrivacyPage() {
    return (
        <Wrapper>
            <h1>Datenschutzerklärung</h1>
            <h2 id="m14">Einleitung</h2>
            <p>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären,
                welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten“
                bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die
                Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen
                personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als
                auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie
                innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile
                (nachfolgend zusammenfassend bezeichnet als "Onlineangebot“).</p>
            <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
            <p>Stand: 23. Juni 2022</p>
            <h2>Inhaltsübersicht</h2>
            <ul class="index">
                <li>
                    <a class="index-link" href="#m14">Einleitung</a>
                </li>
                <li>
                    <a class="index-link" href="#m3">Verantwortlicher</a>
                </li>
                <li>
                    <a class="index-link" href="#mOverview">Übersicht der Verarbeitungen</a>
                </li>
                <li>
                    <a class="index-link" href="#m13">Maßgebliche Rechtsgrundlagen</a>
                </li>
                <li>
                    <a class="index-link" href="#m27">Sicherheitsmaßnahmen</a>
                </li>
                <li>
                    <a class="index-link" href="#m12">Löschung von Daten</a>
                </li>
                <li>
                    <a class="index-link" href="#m317">Geschäftliche Leistungen</a>
                </li>
                <li>
                    <a class="index-link" href="#m225">Bereitstellung des Onlineangebotes und Webhosting</a>
                </li>
                <li>
                    <a class="index-link" href="#m182">Kontakt- und Anfragenverwaltung</a>
                </li>
                <li>
                    <a class="index-link" href="#m136">Präsenzen in sozialen Netzwerken (Social Media)</a>
                </li>
                <li>
                    <a class="index-link" href="#m15">Änderung und Aktualisierung der Datenschutzerklärung</a>
                </li>
                <li>
                    <a class="index-link" href="#m42">Begriffsdefinitionen</a>
                </li>
            </ul>
            <h2 id="m3">Verantwortlicher</h2>
            <p>Tjioe Meyer, Wehrmuehle GmbH<br/>Wehrmühlenweg 8<br/>16359 Biesenthal<br/>Deutschland</p>
            E-Mail-Adresse:
            <p>
                <a href="mailto:tm@wehmuehle.com">tm@wehmuehle.com</a>
            </p>
            Impressum:
            <p>
                <a href="https://wehrmuehle.com/imprint" target="_blank">https://wehrmuehle.com/imprint</a>
            </p>
            <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
            <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die
                Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>
            <h3>Arten der verarbeiteten Daten</h3>
            <ul>
                <li>Bestandsdaten.</li>
                <li>Zahlungsdaten.</li>
                <li>Kontaktdaten.</li>
                <li>Inhaltsdaten.</li>
                <li>Vertragsdaten.</li>
                <li>Nutzungsdaten.</li>
                <li>Meta-/Kommunikationsdaten.</li>
            </ul>
            <h3>Kategorien betroffener Personen</h3>
            <ul>
                <li>Kunden.</li>
                <li>Interessenten.</li>
                <li>Kommunikationspartner.</li>
                <li>Nutzer.</li>
                <li>Geschäfts- und Vertragspartner.</li>
            </ul>
            <h3>Zwecke der Verarbeitung</h3>
            <ul>
                <li>Erbringung vertraglicher Leistungen und Kundenservice.</li>
                <li>Kontaktanfragen und Kommunikation.</li>
                <li>Sicherheitsmaßnahmen.</li>
                <li>Büro- und Organisationsverfahren.</li>
                <li>Verwaltung und Beantwortung von Anfragen.</li>
                <li>Feedback.</li>
                <li>Marketing.</li>
                <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                <li>Informationstechnische Infrastruktur.</li>
            </ul>
            <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
            <p>Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf
                deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur
                Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in
                Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im
                Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese
                in der Datenschutzerklärung mit.</p>
            <ul>
                <li>
                    <strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit.
                        b. DSGVO)</strong>
                    - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei
                    die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen
                    erforderlich, die auf Anfrage der betroffenen Person erfolgen.</li>
                <li>
                    <strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO)</strong>
                    - Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung
                    erforderlich, der der Verantwortliche unterliegt.</li>
                <li>
                    <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)</strong>
                    - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
                    Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen
                    oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz
                    personenbezogener Daten erfordern, überwiegen.</li>
            </ul>
            <p>Zusätzlich zu den Datenschutzregelungen der Datenschutz-Grundverordnung
                gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört
                insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei
                der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
                insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung,
                zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener
                Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie
                automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Des
                Weiteren regelt es die Datenverarbeitung für Zwecke des
                Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick auf die
                Begründung, Durchführung oder Beendigung von Beschäftigungsverhältnissen sowie
                die Einwilligung von Beschäftigten. Ferner können Landesdatenschutzgesetze der
                einzelnen Bundesländer zur Anwendung gelangen.</p>
            <h2 id="m27">Sicherheitsmaßnahmen</h2>
            <p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des
                Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der
                Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen
                Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und
                Freiheiten natürlicher Personen geeignete technische und organisatorische
                Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
            <p>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit,
                Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und
                elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der
                Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des
                Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von
                Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der
                Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener
                Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie
                Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung
                und durch datenschutzfreundliche Voreinstellungen.</p>
            <p>SSL-Verschlüsselung (https): Um Ihre via unserem Online-Angebot übermittelten
                Daten zu schützen, nutzen wir eine SSL-Verschlüsselung. Sie erkennen derart
                verschlüsselte Verbindungen an dem Präfix https:// in der Adresszeile Ihres
                Browsers.</p>
            <h2 id="m12">Löschung von Daten</h2>
            <p>Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben
                gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen
                werden oder sonstige Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung
                dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind).
                Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich
                zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke
                beschränkt. D.h., die Daten werden gesperrt und nicht für andere Zwecke
                verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen
                Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer
                anderen natürlichen oder juristischen Person erforderlich ist.
            </p>
            <p>Unsere Datenschutzhinweise können ferner weitere Angaben zu der Aufbewahrung
                und Löschung von Daten beinhalten, die für die jeweiligen Verarbeitungen
                vorrangig gelten.</p>
            <h2 id="m317">Geschäftliche Leistungen</h2>
            <p>Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z.B. Kunden und
                Interessenten (zusammenfassend bezeichnet als "Vertragspartner") im Rahmen von
                vertraglichen und vergleichbaren Rechtsverhältnissen sowie damit verbundenen
                Maßnahmen und im Rahmen der Kommunikation mit den Vertragspartnern (oder
                vorvertraglich), z.B., um Anfragen zu beantworten.</p>
            <p>Wir verarbeiten diese Daten, um unsere vertraglichen Verpflichtungen zu
                erfüllen. Dazu gehören insbesondere die Verpflichtungen zur Erbringung der
                vereinbarten Leistungen, etwaige Aktualisierungspflichten und Abhilfe bei
                Gewährleistungs- und sonstigen Leistungsstörungen. Darüber hinaus verarbeiten
                wir die Daten zur Wahrung unserer Rechte und zum Zwecke der mit diesen Pflichten
                verbundenen Verwaltungsaufgaben sowie der Unternehmensorganisation. Darüber
                hinaus verarbeiten wir die Daten auf Grundlage unserer berechtigten Interessen
                an einer ordnungsgemäßen und betriebswirtschaftlichen Geschäftsführung sowie an
                Sicherheitsmaßnahmen zum Schutz unserer Vertragspartner und unseres
                Geschäftsbetriebes vor Missbrauch, Gefährdung ihrer Daten, Geheimnisse,
                Informationen und Rechte (z.B. zur Beteiligung von Telekommunikations-,
                Transport- und sonstigen Hilfsdiensten sowie Subunternehmern, Banken, Steuer-
                und Rechtsberatern, Zahlungsdienstleistern oder Finanzbehörden). Im Rahmen des
                geltenden Rechts geben wir die Daten von Vertragspartnern nur insoweit an Dritte
                weiter, als dies für die vorgenannten Zwecke oder zur Erfüllung gesetzlicher
                Pflichten erforderlich ist. Über weitere Formen der Verarbeitung, z.B. zu
                Marketingzwecken, werden die Vertragspartner im Rahmen dieser
                Datenschutzerklärung informiert.</p>
            <p>Welche Daten für die vorgenannten Zwecke erforderlich sind, teilen wir den
                Vertragspartnern vor oder im Rahmen der Datenerhebung, z.B. in Onlineformularen,
                durch besondere Kennzeichnung (z.B. Farben) bzw. Symbole (z.B. Sternchen o.ä.),
                oder persönlich mit.</p>
            <p>Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und
                vergleichbarer Pflichten, d.h., grundsätzlich nach Ablauf von 4 Jahren, es sei
                denn, dass die Daten in einem Kundenkonto gespeichert werden, z.B., solange sie
                aus gesetzlichen Gründen der Archivierung aufbewahrt werden müssen. Die
                gesetzliche Aufbewahrungsfrist beträgt bei steuerrechtlich relevanten Unterlagen
                sowie bei Handelsbüchern, Inventaren, Eröffnungsbilanzen, Jahresabschlüssen, die
                zum Verständnis dieser Unterlagen erforderlichen Arbeitsanweisungen und
                sonstigen Organisationsunterlagen und Buchungsbelegen zehn Jahre sowie bei
                empfangenen Handels- und Geschäftsbriefen und Wiedergaben der abgesandten
                Handels- und Geschäftsbriefe sechs Jahre. Die Frist beginnt mit Ablauf des
                Kalenderjahres, in dem die letzte Eintragung in das Buch gemacht, das Inventar,
                die Eröffnungsbilanz, der Jahresabschluss oder der Lagebericht aufgestellt, der
                Handels- oder Geschäftsbrief empfangen oder abgesandt worden oder der
                Buchungsbeleg entstanden ist, ferner die Aufzeichnung vorgenommen worden ist
                oder die sonstigen Unterlagen entstanden sind.</p>
            <p>Soweit wir zur Erbringung unserer Leistungen Drittanbieter oder Plattformen
                einsetzen, gelten im Verhältnis zwischen den Nutzern und den Anbietern die
                Geschäftsbedingungen und Datenschutzhinweise der jeweiligen Drittanbieter oder
                Plattformen.
            </p>
            <ul class="m-elements">
                <li>
                    <strong>Verarbeitete Datenarten:</strong>
                    Bestandsdaten (z.B. Namen, Adressen); Zahlungsdaten (z.B. Bankverbindungen,
                    Rechnungen, Zahlungshistorie); Kontaktdaten (z.B. E-Mail, Telefonnummern);
                    Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit, Kundenkategorie);
                    Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten);
                    Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
                <li>
                    <strong>Betroffene Personen:</strong>
                    Kunden; Interessenten; Geschäfts- und Vertragspartner.</li>
                <li>
                    <strong>Zwecke der Verarbeitung:</strong>
                    Erbringung vertraglicher Leistungen und Kundenservice; Sicherheitsmaßnahmen;
                    Kontaktanfragen und Kommunikation; Büro- und Organisationsverfahren; Verwaltung
                    und Beantwortung von Anfragen.</li>
                <li>
                    <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b.
                    DSGVO); Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO); Berechtigte
                    Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
            </ul>
            <p>
                <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
            </p>
            <ul class="m-elements">
                <li>
                    <strong>Shop und E-Commerce:
                    </strong>Wir verarbeiten die Daten unserer Kunden, um ihnen die Auswahl, den
                    Erwerb, bzw. die Bestellung der gewählten Produkte, Waren sowie verbundener
                    Leistungen, als auch deren Bezahlung und Zustellung, bzw. Ausführung zu
                    ermöglichen. Sofern für die Ausführung einer Bestellung erforderlich, setzen wir
                    Dienstleister, insbesondere Post-, Speditions- und Versandunternehmen ein, um
                    die Lieferung, bzw. Ausführung gegenüber unseren Kunden durchzuführen. Für die
                    Abwicklung der Zahlungsvorgänge nehmen wir die Dienste von Banken und
                    Zahlungsdienstleistern in Anspruch. Die erforderlichen Angaben sind als solche
                    im Rahmen des Bestell- bzw. vergleichbaren Erwerbsvorgangs gekennzeichnet und
                    umfassen die zur Auslieferung, bzw. Zurverfügungstellung und Abrechnung
                    benötigten Angaben sowie Kontaktinformationen, um etwaige Rücksprache halten zu
                    können;
                    <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b.
                    DSGVO).</li>
                <li>
                    <strong>Veranstaltungen und Events:
                    </strong>Wir verarbeiten die Daten der Teilnehmer der von uns angebotenen oder
                    ausgerichteten Veranstaltungen, Events und ähnlichen Aktivitäten (nachfolgend
                    einheitlich als "Teilnehmer" und „Veranstaltungen“ bezeichnet), um ihnen die
                    Teilnahme an den Veranstaltungen und Inanspruchnahme der mit der Teilnahme
                    verbundenen Leistungen oder Aktionen zu ermöglichen. Sofern wir in diesem Rahmen
                    gesundheitsbezogene Daten, religiöse, politische oder sonstige besondere
                    Kategorien von Daten verarbeiten, dann erfolgt diese im Rahmen der
                    Offenkundigkeit (z.B. bei thematisch ausgerichteten Veranstaltungen oder dient
                    der Gesundheitsvorsorge, Sicherheit oder erfolgt mit Einwilligung der
                    Betroffenen). Die erforderlichen Angaben sind als solche im Rahmen des
                    Auftrags-, Bestell- bzw. vergleichbaren Vertragsschlusses gekennzeichnet und
                    umfassen die zur Leistungserbringung und Abrechnung benötigten Angaben sowie
                    Kontaktinformationen, um etwaige Rücksprachen halten zu können. Soweit wir
                    Zugang zu Informationen der Endkunden, Mitarbeitern oder anderer Personen
                    erhalten, verarbeiten wir diese im Einklang mit den gesetzlichen und
                    vertraglichen Vorgaben;
                    <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b.
                    DSGVO).</li>
            </ul>
            <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2>
            <p>Um unser Onlineangebot sicher und effizient bereitstellen zu können, nehmen
                wir die Leistungen von einem oder mehreren Webhosting-Anbietern in Anspruch, von
                deren Servern (bzw. von ihnen verwalteten Servern) das Onlineangebot abgerufen
                werden kann. Zu diesen Zwecken können wir Infrastruktur- und
                Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste
                sowie Sicherheitsleistungen und technische Wartungsleistungen in Anspruch
                nehmen.</p>
            <p>Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten Daten
                können alle die Nutzer unseres Onlineangebotes betreffenden Angaben gehören, die
                im Rahmen der Nutzung und der Kommunikation anfallen. Hierzu gehören regelmäßig
                die IP-Adresse, die notwendig ist, um die Inhalte von Onlineangeboten an Browser
                ausliefern zu können, und alle innerhalb unseres Onlineangebotes oder von
                Webseiten getätigten Eingaben.</p>
            <ul class="m-elements">
                <li>
                    <strong>Verarbeitete Datenarten:</strong>
                    Inhaltsdaten (z.B. Eingaben in Onlineformularen); Nutzungsdaten (z.B. besuchte
                    Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten
                    (z.B. Geräte-Informationen, IP-Adressen).</li>
                <li>
                    <strong>Betroffene Personen:</strong>
                    Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                <li>
                    <strong>Zwecke der Verarbeitung:</strong>
                    Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit;
                    Informationstechnische Infrastruktur (Betrieb und Bereitstellung von
                    Informationssystemen und technischen Geräten (Computer, Server etc.).).</li>
                <li>
                    <strong>Rechtsgrundlagen:</strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
            </ul>
            <p>
                <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
            </p>
            <ul class="m-elements">
                <li>
                    <strong>Erhebung von Zugriffsdaten und Logfiles:
                    </strong>Wir selbst (bzw. unser Webhostinganbieter) erheben Daten zu jedem
                    Zugriff auf den Server (sogenannte Serverlogfiles). Zu den Serverlogfiles können
                    die Adresse und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit
                    des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf,
                    Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die
                    zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider
                    gehören. Die Serverlogfiles können zum einen zu Zwecken der Sicherheit
                    eingesetzt werden, z.B., um eine Überlastung der Server zu vermeiden
                    (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken)
                    und zum anderen, um die Auslastung der Server und ihre Stabilität
                    sicherzustellen;
                    <strong>Rechtsgrundlagen:</strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO);
                    <strong>Löschung von Daten:</strong>
                    Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und
                    danach gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu
                    Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen
                    Vorfalls von der Löschung ausgenommen.</li>
                <li>
                    <strong>THE GATSBY, INC.:
                    </strong>Leistungen auf dem Gebiet der Bereitstellung von
                    informationstechnischer Infrastruktur und verbundenen Dienstleistungen
                    <strong>Dienstanbieter:</strong>
                    THE GATSBY, INC., 548 Market St, 36791, San Francisco, California, 94104, United
                    States;
                    <strong>Rechtsgrundlagen:</strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO);
                    <strong>Website:</strong>
                    <a href="https://www.gatsbyjs.com" target="_blank">https://www.gatsbyjs.com</a>;
                    <strong>Datenschutzerklärung:</strong>
                    <a href="https://www.gatsbyjs.com/privacy-policy" target="_blank">https://www.gatsbyjs.com/privacy-policy</a>;
                    <strong>Auftragsverarbeitungsvertrag:</strong>
                    Wird vom Dienstanbieter bereitgestellt.</li>
            </ul>
            <h2 id="m182">Kontakt- und Anfragenverwaltung</h2>
            <p>Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon
                oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und
                Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet
                soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter
                Maßnahmen erforderlich ist.</p>
            <p>Die Beantwortung der Kontaktanfragen sowie die Verwaltung von Kontakt- und
                Anfragedaten im Rahmen von vertraglichen oder vorvertraglichen Beziehungen
                erfolgt zur Erfüllung unserer vertraglichen Pflichten oder zur Beantwortung von
                (vor)vertraglichen Anfragen und im Übrigen auf Grundlage der berechtigten
                Interessen an der Beantwortung der Anfragen und Pflege von Nutzer- bzw.
                Geschäftsbeziehungen.</p>
            <ul class="m-elements">
                <li>
                    <strong>Verarbeitete Datenarten:</strong>
                    Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in
                    Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
                    Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                    IP-Adressen).</li>
                <li>
                    <strong>Betroffene Personen:</strong>
                    Kommunikationspartner.</li>
                <li>
                    <strong>Zwecke der Verarbeitung:</strong>
                    Erbringung vertraglicher Leistungen und Kundenservice; Kontaktanfragen und
                    Kommunikation; Verwaltung und Beantwortung von Anfragen; Feedback (z.B. Sammeln
                    von Feedback via Online-Formular); Bereitstellung unseres Onlineangebotes und
                    Nutzerfreundlichkeit.</li>
                <li>
                    <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b.
                    DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
            </ul>
            <p>
                <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
            </p>
            <ul class="m-elements">
                <li>
                    <strong>Kontaktformular:
                    </strong>Wenn Nutzer über unser Kontaktformular, E-Mail oder andere
                    Kommunikationswege mit uns in Kontakt treten, verarbeiten wir die uns in diesem
                    Zusammenhang mitgeteilten Daten zur Bearbeitung des mitgeteilten Anliegens. Zu
                    diesem Zweck verarbeiten wir personenbezogene Daten im Rahmen vorvertraglicher
                    und vertraglicher Geschäftsbeziehungen, soweit dies zu deren Erfüllung
                    erforderlich ist und im Übrigen auf Grundlage unserer berechtigten Interessen
                    sowie der Interessen der Kommunikationspartner an der Beantwortung der Anliegen
                    und unserer gesetzlichen Aufbewahrungspflichten;
                    <strong>Rechtsgrundlagen:</strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b.
                    DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
            </ul>
            <h2 id="m136">Präsenzen in sozialen Netzwerken (Social Media)</h2>
            <p>Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten
                in diesem Rahmen Daten der Nutzer, um mit den dort aktiven Nutzern zu
                kommunizieren oder um Informationen über uns anzubieten.</p>
            <p>Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der
                Europäischen Union verarbeitet werden können. Hierdurch können sich für die
                Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer
                erschwert werden könnte.</p>
            <p>Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall
                für Marktforschungs- und Werbezwecke verarbeitet. So können z.B. anhand des
                Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer
                Nutzungsprofile erstellt werden. Die Nutzungsprofile können wiederum verwendet
                werden, um z.B. Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten,
                die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden
                im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das
                Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Ferner
                können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern
                verwendeten Geräte gespeichert werden (insbesondere, wenn die Nutzer Mitglieder
                der jeweiligen Plattformen sind und bei diesen eingeloggt sind).</p>
            <p>Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der
                Widerspruchsmöglichkeiten (Opt-Out) verweisen wir auf die Datenschutzerklärungen
                und Angaben der Betreiber der jeweiligen Netzwerke.</p>
            <p>Auch im Fall von Auskunftsanfragen und der Geltendmachung von
                Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten bei den
                Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils Zugriff
                auf die Daten der Nutzer und können direkt entsprechende Maßnahmen ergreifen und
                Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie sich an
                uns wenden.</p>
            <ul class="m-elements">
                <li>
                    <strong>Verarbeitete Datenarten:</strong>
                    Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in
                    Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
                    Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                    IP-Adressen).</li>
                <li>
                    <strong>Betroffene Personen:</strong>
                    Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                <li>
                    <strong>Zwecke der Verarbeitung:</strong>
                    Kontaktanfragen und Kommunikation; Feedback (z.B. Sammeln von Feedback via
                    Online-Formular); Marketing.</li>
                <li>
                    <strong>Rechtsgrundlagen:</strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
            </ul>
            <p>
                <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
            </p>
            <ul class="m-elements">
                <li>
                    <strong>Instagram:
                    </strong>Soziales Netzwerk;
                    <strong>Dienstanbieter:</strong>
                    Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA;
                    <strong>Rechtsgrundlagen:</strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO);
                    <strong>Website:</strong>
                    <a href="https://www.instagram.com" target="_blank">https://www.instagram.com</a>;
                    <strong>Datenschutzerklärung:</strong>
                    <a href="https://instagram.com/about/legal/privacy" target="_blank">https://instagram.com/about/legal/privacy</a>.</li>
                <li>
                    <strong>Facebook-Seiten:
                    </strong>Profile innerhalb des sozialen Netzwerks Facebook - Wir sind gemeinsam
                    mit Meta Platforms Ireland Limited für die Erhebung (jedoch nicht die weitere
                    Verarbeitung) von Daten der Besucher unserer Facebook-Seite (sog. "Fanpage")
                    verantwortlich. Zu diesen Daten gehören Informationen zu den Arten von Inhalten,
                    die Nutzer sich ansehen oder mit denen sie interagieren, oder die von ihnen
                    vorgenommenen Handlungen (siehe unter „Von dir und anderen getätigte und
                    bereitgestellte Dinge“ in der Facebook-Datenrichtlinie:
                    <a href="https://www.facebook.com/policy" target="_blank">https://www.facebook.com/policy</a>),
                    sowie Informationen über die von den Nutzern genutzten Geräte (z. B.
                    IP-Adressen, Betriebssystem, Browsertyp, Spracheinstellungen, Cookie-Daten;
                    siehe unter „Geräteinformationen“ in der Facebook-Datenrichtlinie:
                    <a href="https://www.facebook.com/policy" target="_blank">https://www.facebook.com/policy</a>).
                    Wie in der Facebook-Datenrichtlinie unter „Wie verwenden wir diese
                    Informationen?“ erläutert, erhebt und verwendet Facebook Informationen auch, um
                    Analysedienste, so genannte "Seiten-Insights", für Seitenbetreiber
                    bereitzustellen, damit diese Erkenntnisse darüber erhalten, wie Personen mit
                    ihren Seiten und mit den mit ihnen verbundenen Inhalten interagieren. Wir haben
                    mit Facebook eine spezielle Vereinbarung abgeschlossen ("Informationen zu
                    Seiten-Insights",
                    <a
                        href="https://www.facebook.com/legal/terms/page_controller_addendum"
                        target="_blank">https://www.facebook.com/legal/terms/page_controller_addendum</a>),
                    in der insbesondere geregelt wird, welche Sicherheitsmaßnahmen Facebook beachten
                    muss und in der Facebook sich bereit erklärt hat die Betroffenenrechte zu
                    erfüllen (d. h. Nutzer können z. B. Auskünfte oder Löschungsanfragen direkt an
                    Facebook richten). Die Rechte der Nutzer (insbesondere auf Auskunft, Löschung,
                    Widerspruch und Beschwerde bei zuständiger Aufsichtsbehörde), werden durch die
                    Vereinbarungen mit Facebook nicht eingeschränkt. Weitere Hinweise finden sich in
                    den "Informationen zu Seiten-Insights" (<a
                        href="https://www.facebook.com/legal/terms/information_about_page_insights_data"
                        target="_blank">https://www.facebook.com/legal/terms/information_about_page_insights_data</a>);
                    <strong>Dienstanbieter:</strong>
                    Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour,
                    Dublin 2, Irland;
                    <strong>Rechtsgrundlagen:</strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO);
                    <strong>Website:</strong>
                    <a href="https://www.facebook.com" target="_blank">https://www.facebook.com</a>;
                    <strong>Datenschutzerklärung:</strong>
                    <a href="https://www.facebook.com/about/privacy" target="_blank">https://www.facebook.com/about/privacy</a>;
                    <strong>Standardvertragsklauseln (Gewährleistung Datenschutzniveau bei
                        Verarbeitung in Drittländern):</strong>
                    <a
                        href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                        target="_blank">https://www.facebook.com/legal/EU_data_transfer_addendum</a>;
                    <strong>Weitere Informationen:</strong>
                    Vereinbarung gemeinsamer Verantwortlichkeit:
                    <a
                        href="https://www.facebook.com/legal/terms/information_about_page_insights_data"
                        target="_blank">https://www.facebook.com/legal/terms/information_about_page_insights_data</a>.</li>
            </ul>
            <h2 id="m15">Änderung und Aktualisierung der Datenschutzerklärung</h2>
            <p>Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung
                zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen
                der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
                informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits
                (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung
                erforderlich wird.</p>
            <p>Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen
                von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die
                Adressen sich über die Zeit ändern können und bitten die Angaben vor
                Kontaktaufnahme zu prüfen.</p>
            <h2 id="m42">Begriffsdefinitionen</h2>
            <p>In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
                Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe sind dem
                Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die gesetzlichen
                Definitionen sind verbindlich. Die nachfolgenden Erläuterungen sollen dagegen
                vor allem dem Verständnis dienen. Die Begriffe sind alphabetisch sortiert.</p>
            <ul class="glossary">
                <li>
                    <strong>Personenbezogene Daten:</strong>
                    "Personenbezogene Daten“ sind alle Informationen, die sich auf eine
                    identifizierte oder identifizierbare natürliche Person (im Folgenden "betroffene
                    Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen,
                    die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie
                    einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung
                    (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert
                    werden kann, die Ausdruck der physischen, physiologischen, genetischen,
                    psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser
                    natürlichen Person sind.
                </li>
                <li>
                    <strong>Verantwortlicher:</strong>
                    Als "Verantwortlicher“ wird die natürliche oder juristische Person, Behörde,
                    Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die
                    Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet,
                    bezeichnet.
                </li>
                <li>
                    <strong>Verarbeitung:</strong>
                    "Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren
                    ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
                    personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden
                    Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern, das
                    Übermitteln oder das Löschen.
                </li>
            </ul>
            <p class="seal">
                <a
                    href="https://datenschutz-generator.de/"
                    title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                    target="_blank"
                    rel="noopener noreferrer nofollow"><img
                    src="https://datenschutz-generator.de/wp-content/plugins/ts-dsg/images/dsg-seal/dsg-seal-pp-de.png"
                    alt="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                    width="250"
                    height="250"/></a>
            </p>
        </Wrapper>
    )
}
