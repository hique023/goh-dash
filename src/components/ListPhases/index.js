// Global
import React from "react";
import PhaseLink from "../PhaseLink";

// Asssets
import "./styles.css";
import phase1 from "../../assets/phase1.png";
import phase2 from "../../assets/phase2.png";
import phase3 from "../../assets/phase3.png";
import phase4 from "../../assets/phase4.png";
import user from "../../assets/user.png";
import stageManagement from "../../assets/stageManagement.png";

export default function ListPhases() {
  return (
    <div className="containerListPhases">
      <PhaseLink
        name="Fase 01"
        phaseId="fase1"
        page="fase"
        url={phase1}
        color="var(--blue)"
      />
      <PhaseLink
        name="Fase 02"
        phaseId="fase2"
        page="fase"
        url={phase2}
        color="var(--yellow)"
      />
      <PhaseLink
        name="Fase 03"
        phaseId="fase3"
        page="fase"
        url={phase3}
        color="var(--wine)"
      />
      <PhaseLink
        name="Fase 04"
        phaseId="fase4"
        page="fase"
        url={phase4}
        color="var(--green)"
      />
      <PhaseLink
        name="Usuários"
        phaseId="users"
        page="users"
        url={user}
        color="var(--block)"
      />
      <PhaseLink
        name="Gestão de Etapas"
        phaseId="stageManagement"
        page="etapa"
        url={stageManagement}
        color="var(--blue-soft)"
      />
    </div>
  );
}
