// Global
import React, { useState } from "react";
import TopBarPhase from "../TopBarPhase";
import SubBar from "../SubBar";

// Assets
import "./styles.css";

export default function EditUser() {
  const color = localStorage.getItem("color");
  const nameUser = localStorage.getItem("nameUser");

  const [avatar, setAvatar] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [group, setGoupr] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState();

  return (
    <div className="containerEditUser">
      <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

      <SubBar name="Edição de Usuário" color={color} />

      <div className="contentEditUser">
        <div className="editUser">
          <h1>Dados Pessoais</h1>
          <div className="slot">
            <h1>Avatar</h1>
            <input type="text" value={avatar} />
          </div>
          <div className="slot">
            <h1>Email</h1>
            <input type="text" value={email} />
          </div>
          <div className="slot">
            <h1>Primeiro Nome</h1>
            <input type="text" value={email} />
          </div>
          <div className="slot">
            <h1>Grupo</h1>
            <input type="text" value={email} />
          </div>
          <div className="slot">
            <h1>Nome</h1>
            <input type="text" value={email} />
          </div>
          <div className="slot">
            <h1>Score</h1>
            <h2>120 xp</h2>
          </div>

          <hr />

          <div className="editUser">
            <h1>Liberação de Quiz</h1>
            <div className="phase">
              <div className="stage">
                <h1>Fase 1</h1>
                <div className="slot">
                  <h2>Etapa 1</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 2</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 3</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 4</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
              </div>
              <div className="stage">
                <h1>Fase 2</h1>
                <div className="slot">
                  <h2>Etapa 1</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 2</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 3</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 4</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
              </div>
              <div className="stage">
                <h1>Fase 3</h1>
                <div className="slot">
                  <h2>Etapa 1</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 2</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 3</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 4</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
              </div>
              <div className="stage">
                <h1>Fase 4</h1>
                <div className="slot">
                  <h2>Etapa 1</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 2</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 3</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 4</h2>
                  <select name="phase1Stage1">
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="editUser">
          <h1>Pontuação</h1>
          <h1>Fase 1</h1>
          <div className="phase">
            <div className="stage">
              <h1>Etapa 1</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 2</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 3</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 4</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
          </div>
          <h1>Fase 2</h1>
          <div className="phase">
            <div className="stage">
              <h1>Etapa 1</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 2</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 3</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 4</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
          </div>
          <h1>Fase 3</h1>
          <div className="phase">
            <div className="stage">
              <h1>Etapa 1</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 2</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 3</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 4</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
          </div>
          <h1>Fase 4</h1>
          <div className="phase">
            <div className="stage">
              <h1>Etapa 1</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 2</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 3</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 4</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input type="text" value={avatar} />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input type="text" value={avatar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
