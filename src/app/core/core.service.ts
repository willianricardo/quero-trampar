import {Injectable} from '@angular/core';

@Injectable()
export class CoreService {

  getValuesFromObject(objeto) {
    if (!objeto) {
      return [];
    }

    return Object.keys(objeto).map(key => objeto[key]);
  }


  getLinks() {
    return [
      {tipo: 'facebook', nome: 'Facebook'},
      {tipo: 'twitter', nome: 'Twitter'},
      {tipo: 'linkedin', nome: 'Linkedin'},
      {tipo: 'instagram', nome: 'Instagram'},
      {tipo: 'google', nome: 'Google'},
      {tipo: 'site', nome: 'Site'},
      {tipo: 'github', nome: 'GitHub'}
    ];
  }

  getEstados() {
    return [
      {
        uf: 'AC',
        nome: 'Acre'
      },
      {
        uf: 'AL',
        nome: 'Alagoas'
      },
      {
        uf: 'AM',
        nome: 'Amazonas'
      },
      {
        uf: 'AP',
        nome: 'Amapá'
      },
      {
        uf: 'BA',
        nome: 'Bahia'
      },
      {
        'id': '6',
        uf: 'CE',
        nome: 'Ceará'
      },
      {
        uf: 'DF',
        nome: 'Distrito Federal'
      },
      {
        uf: 'ES',
        nome: 'Espírito Santo'
      },
      {
        uf: 'GO',
        nome: 'Goiás'
      },
      {
        uf: 'MA',
        nome: 'Maranhão'
      },
      {
        uf: 'MG',
        nome: 'Minas Gerais'
      },
      {
        uf: 'MS',
        nome: 'Mato Grosso do Sul'
      },
      {
        uf: 'MT',
        nome: 'Mato Grosso'
      },
      {
        uf: 'PA',
        nome: 'Pará'
      },
      {
        uf: 'PB',
        nome: 'Paraíba'
      },
      {
        uf: 'PE',
        nome: 'Pernambuco'
      },
      {
        uf: 'PI',
        nome: 'Piauí'
      },
      {
        uf: 'PR',
        nome: 'Paraná'
      },
      {
        uf: 'RJ',
        nome: 'Rio de Janeiro'
      },
      {
        uf: 'RN',
        nome: 'Rio Grande do Norte'
      },
      {
        uf: 'RO',
        nome: 'Rondônia'
      },
      {
        uf: 'RR',
        nome: 'Roraima'
      },
      {
        uf: 'RS',
        nome: 'Rio Grande do Sul'
      },
      {
        uf: 'SC',
        nome: 'Santa Catarina'
      },
      {
        uf: 'SE',
        nome: 'Sergipe'
      },
      {
        uf: 'SP',
        nome: 'São Paulo'
      },
      {
        uf: 'TO',
        nome: 'Tocantins'
      }
    ];
  }

  getCategorias() {
    return [
      {
        'descricao': 'Casa',
        'itens': [
          {
            'uid': 39,
            'descricao': 'Ar Condicionado e Ventilação'
          },
          {
            'uid': 38,
            'descricao': 'Carpinteiro'
          },
          {
            'uid': 12,
            'descricao': 'Chaveiro'
          },
          {
            'uid': 51,
            'descricao': 'Conserto de eletrodomésticos'
          },
          {
            'uid': 49,
            'descricao': 'Dedetização'
          },
          {
            'uid': 3,
            'descricao': 'Diarista'
          },
          {
            'uid': 6,
            'descricao': 'Eletricista'
          },
          {
            'uid': 10,
            'descricao': 'Encanador'
          },
          {
            'uid': 8,
            'descricao': 'Jardineiro'
          },
          {
            'uid': 42,
            'descricao': 'Lavanderia'
          },
          {
            'uid': 7,
            'descricao': 'Marceneiro'
          },
          {
            'uid': 11,
            'descricao': 'Pedreiro'
          },
          {
            'uid': 24,
            'descricao': 'Personal Organizer'
          },
          {
            'uid': 16,
            'descricao': 'Pets'
          },
          {
            'uid': 5,
            'descricao': 'Pintor'
          },
          {
            'uid': 41,
            'descricao': 'Serralheiro'
          },
          {
            'uid': 9,
            'descricao': 'Serviços Gerais'
          },
          {
            'uid': 40,
            'descricao': 'Tapeceiro'
          },
          {
            'uid': 25,
            'descricao': 'Técnico de Informática'
          },
          {
            'uid': 37,
            'descricao': 'Vidraceiro'
          }
        ]
      },
      {
        'descricao': 'Cuidados Pessoais',
        'itens': [
          {
            'uid': 19,
            'descricao': 'Acompanhante de Idoso'
          },
          {
            'uid': 36,
            'descricao': 'Acupuntura'
          },
          {
            'uid': 18,
            'descricao': 'Cabeleireiro'
          },
          {
            'uid': 31,
            'descricao': 'Costureiros'
          },
          {
            'uid': 35,
            'descricao': 'Depilação'
          },
          {
            'uid': 47,
            'descricao': 'Esteticista'
          },
          {
            'uid': 17,
            'descricao': 'Manicure'
          },
          {
            'uid': 46,
            'descricao': 'Maquiador'
          },
          {
            'uid': 43,
            'descricao': 'Quiropraxista'
          }
        ]
      },
      {
        'descricao': 'Aulas Particulares',
        'itens': [
          {
            'uid': 28,
            'descricao': 'Acadêmicos'
          },
          {
            'uid': 48,
            'descricao': 'Danças'
          },
          {
            'uid': 27,
            'descricao': 'Esportes'
          },
          {
            'uid': 26,
            'descricao': 'Música'
          }
        ]
      },
      {
        'descricao': 'Transporte',
        'itens': [
          {
            'uid': 23,
            'descricao': 'Bikeboy'
          },
          {
            'uid': 13,
            'descricao': 'Carreto'
          },
          {
            'uid': 30,
            'descricao': 'Lavagem de Carro'
          },
          {
            'uid': 14,
            'descricao': 'Motoboy'
          },
          {
            'uid': 15,
            'descricao': 'Motorista'
          }
        ]
      },
      {
        'descricao': 'Eventos',
        'itens': [
          {
            'uid': 34,
            'descricao': 'Alimentos e Bebidas'
          },
          {
            'uid': 44,
            'descricao': 'Animação de festas'
          },
          {
            'uid': 22,
            'descricao': 'Churrasqueiro'
          },
          {
            'uid': 45,
            'descricao': 'Decoração'
          },
          {
            'uid': 20,
            'descricao': 'DJ'
          },
          {
            'uid': 32,
            'descricao': 'Fotógrafo'
          },
          {
            'uid': 21,
            'descricao': 'Garçom / Barman'
          }
        ]
      }
    ];
  }

  getEspecialidades() {
    return [
      {
        'uid': 10,
        'descricao': 'Encanador',
        'itens': [
          {
            'uid': 112,
            'descricao': 'Bomba de água'
          },
          {
            'uid': 107,
            'descricao': 'Cisternas'
          },
          {
            'uid': 330,
            'descricao': 'Conserto'
          },
          {
            'uid': 68,
            'descricao': 'Desentupimento'
          },
          {
            'uid': 329,
            'descricao': 'Manutenção'
          },
          {
            'uid': 75,
            'descricao': 'Tubulação'
          },
          {
            'uid': 76,
            'descricao': 'Vazamento'
          }
        ]
      },
      {
        'uid': 13,
        'descricao': 'Carreto',
        'itens': [
          {
            'uid': 92,
            'descricao': 'Descarte de móveis'
          },
          {
            'uid': 78,
            'descricao': 'Grande carga'
          },
          {
            'uid': 73,
            'descricao': 'Mudanças'
          },
          {
            'uid': 77,
            'descricao': 'Pequena carga'
          }
        ]
      },
      {
        'uid': 48,
        'descricao': 'Danças',
        'itens': [
          {
            'uid': 288,
            'descricao': 'Ballet'
          },
          {
            'uid': 281,
            'descricao': 'Bolero'
          },
          {
            'uid': 285,
            'descricao': 'Dança de salão'
          },
          {
            'uid': 287,
            'descricao': 'Dança do ventre '
          },
          {
            'uid': 286,
            'descricao': 'Forró'
          },
          {
            'uid': 278,
            'descricao': 'Gafieira'
          },
          {
            'uid': 279,
            'descricao': 'Hip Hop'
          },
          {
            'uid': 282,
            'descricao': 'JAZZ'
          },
          {
            'uid': 284,
            'descricao': 'Salsa'
          },
          {
            'uid': 280,
            'descricao': 'Samba-Rock'
          },
          {
            'uid': 283,
            'descricao': 'Tango'
          },
          {
            'uid': 277,
            'descricao': 'Zouk'
          }
        ]
      },
      {
        'uid': 5,
        'descricao': 'Pintor',
        'itens': [
          {
            'uid': 17,
            'descricao': 'Acabamentos'
          },
          {
            'uid': 51,
            'descricao': 'Cimento queimado'
          },
          {
            'uid': 97,
            'descricao': 'Drywall'
          },
          {
            'uid': 40,
            'descricao': 'Grafiato'
          },
          {
            'uid': 83,
            'descricao': 'Grafite e desenho'
          },
          {
            'uid': 50,
            'descricao': 'Pátina e textura'
          }
        ]
      },
      {
        'uid': 46,
        'descricao': 'Maquiador',
        'itens': [
          {
            'uid': 296,
            'descricao': 'Artística'
          },
          {
            'uid': 294,
            'descricao': 'HD – Airbrush'
          },
          {
            'uid': 300,
            'descricao': 'Noivas'
          },
          {
            'uid': 299,
            'descricao': 'Passarela'
          },
          {
            'uid': 297,
            'descricao': ' Publicitária'
          },
          {
            'uid': 295,
            'descricao': 'Social'
          }
        ]
      },
      {
        'uid': 11,
        'descricao': 'Pedreiro',
        'itens': [
          {
            'uid': 90,
            'descricao': 'Aplicação de sinteco e cascolac'
          },
          {
            'uid': 38,
            'descricao': 'Cimento queimado'
          },
          {
            'uid': 74,
            'descricao': 'Drywall'
          },
          {
            'uid': 5,
            'descricao': 'Gesso e forro'
          },
          {
            'uid': 385,
            'descricao': 'Impermeabilização'
          },
          {
            'uid': 63,
            'descricao': 'Mármore e granito'
          },
          {
            'uid': 57,
            'descricao': 'Piso e alvenaria'
          },
          {
            'uid': 56,
            'descricao': 'Porcelanato'
          },
          {
            'uid': 58,
            'descricao': 'Porta, portão e janela'
          },
          {
            'uid': 22,
            'descricao': 'Restauração de piso'
          },
          {
            'uid': 54,
            'descricao': 'Telhadista'
          }
        ]
      },
      {
        'uid': 17,
        'descricao': 'Manicure',
        'itens': [
          {
            'uid': 41,
            'descricao': 'Pedicure'
          },
          {
            'uid': 177,
            'descricao': 'Podóloga'
          },
          {
            'uid': 34,
            'descricao': 'Unhas decoradas'
          }
        ]
      },
      {
        'uid': 23,
        'descricao': 'Bikeboy',
        'itens': [
          {
            'uid': 327,
            'descricao': 'Biker integral'
          },
          {
            'uid': 326,
            'descricao': 'Corrida avulsa'
          }
        ]
      },
      {
        'uid': 20,
        'descricao': 'DJ',
        'itens': [
          {
            'uid': 19,
            'descricao': 'Equipamento de som'
          },
          {
            'uid': 84,
            'descricao': 'Jogo de luzes'
          },
          {
            'uid': 87,
            'descricao': 'Músico'
          }
        ]
      },
      {
        'uid': 22,
        'descricao': 'Churrasqueiro',
        'itens': [
          {
            'uid': 86,
            'descricao': 'Buffet a domicílio'
          },
          {
            'uid': 28,
            'descricao': 'Cozinheiro'
          }
        ]
      },
      {
        'uid': 21,
        'descricao': 'Garçom / Barman',
        'itens': [
          {
            'uid': 179,
            'descricao': 'Coquetéis'
          },
          {
            'uid': 321,
            'descricao': 'Habilidade com bandeja'
          },
          {
            'uid': 80,
            'descricao': 'Malabarismo de coquetéis'
          }
        ]
      },
      {
        'uid': 28,
        'descricao': 'Acadêmicos',
        'itens': [
          {
            'uid': 301,
            'descricao': 'Artes/ Desenho'
          },
          {
            'uid': 138,
            'descricao': 'Ciências'
          },
          {
            'uid': 142,
            'descricao': 'Espanhol'
          },
          {
            'uid': 140,
            'descricao': 'Física'
          },
          {
            'uid': 143,
            'descricao': 'Francês'
          },
          {
            'uid': 137,
            'descricao': 'Geografia'
          },
          {
            'uid': 190,
            'descricao': 'História'
          },
          {
            'uid': 144,
            'descricao': 'Informática'
          },
          {
            'uid': 134,
            'descricao': 'Inglês'
          },
          {
            'uid': 220,
            'descricao': 'Italiano'
          },
          {
            'uid': 135,
            'descricao': 'Matemática'
          },
          {
            'uid': 141,
            'descricao': 'Português'
          },
          {
            'uid': 136,
            'descricao': 'Química'
          }
        ]
      },
      {
        'uid': 25,
        'descricao': 'Técnico de Informática',
        'itens': [
          {
            'uid': 30,
            'descricao': 'Configuração e instalação '
          },
          {
            'uid': 108,
            'descricao': 'Configuração Mac'
          },
          {
            'uid': 109,
            'descricao': 'Configuração Windows'
          },
          {
            'uid': 94,
            'descricao': 'Digitação'
          },
          {
            'uid': 380,
            'descricao': 'Impressora'
          },
          {
            'uid': 95,
            'descricao': 'Linux'
          },
          {
            'uid': 85,
            'descricao': 'Manutenção de eletroeletrônicos'
          },
          {
            'uid': 27,
            'descricao': 'Suporte técnico'
          }
        ]
      },
      {
        'uid': 45,
        'descricao': 'Decoração',
        'itens': [
          {
            'uid': 312,
            'descricao': 'Casamentos'
          },
          {
            'uid': 313,
            'descricao': 'Eventos corporativos'
          },
          {
            'uid': 314,
            'descricao': 'Festa infantil'
          },
          {
            'uid': 316,
            'descricao': 'Teens'
          },
          {
            'uid': 315,
            'descricao': 'Temáticos'
          }
        ]
      },
      {
        'uid': 27,
        'descricao': 'Esportes',
        'itens': [
          {
            'uid': 125,
            'descricao': 'Futebol'
          },
          {
            'uid': 193,
            'descricao': 'Ioga'
          },
          {
            'uid': 206,
            'descricao': 'Kitesurf'
          },
          {
            'uid': 122,
            'descricao': 'Natação'
          },
          {
            'uid': 124,
            'descricao': 'Personal trainer'
          },
          {
            'uid': 123,
            'descricao': 'Surf'
          },
          {
            'uid': 331,
            'descricao': 'Tênis '
          }
        ]
      },
      {
        'uid': 38,
        'descricao': 'Carpinteiro',
        'itens': [
          {
            'uid': 272,
            'descricao': 'Assoalhos'
          },
          {
            'uid': 271,
            'descricao': 'Escadas'
          },
          {
            'uid': 273,
            'descricao': 'Forros'
          },
          {
            'uid': 269,
            'descricao': 'Montagem de móveis'
          },
          {
            'uid': 274,
            'descricao': 'Portas'
          },
          {
            'uid': 270,
            'descricao': 'Telhados'
          },
          {
            'uid': 275,
            'descricao': 'Venezianas'
          }
        ]
      },
      {
        'uid': 16,
        'descricao': 'Pets',
        'itens': [
          {
            'uid': 29,
            'descricao': 'Adestrador'
          },
          {
            'uid': 110,
            'descricao': 'Cat sitter'
          },
          {
            'uid': 42,
            'descricao': 'Dog walker'
          },
          {
            'uid': 4,
            'descricao': 'Hospedagem de cães'
          },
          {
            'uid': 213,
            'descricao': 'Táxi Dog'
          }
        ]
      },
      {
        'uid': 3,
        'descricao': 'Diarista',
        'itens': [
          {
            'uid': 9,
            'descricao': 'Cozinhar'
          },
          {
            'uid': 104,
            'descricao': 'Durante a semana'
          },
          {
            'uid': 1,
            'descricao': 'Faxina'
          },
          {
            'uid': 105,
            'descricao': 'Finais de semana'
          },
          {
            'uid': 37,
            'descricao': 'Lavar roupas'
          },
          {
            'uid': 100,
            'descricao': 'Mensalista'
          },
          {
            'uid': 8,
            'descricao': 'Passar roupas'
          }
        ]
      },
      {
        'uid': 12,
        'descricao': 'Chaveiro',
        'itens': [
          {
            'uid': 46,
            'descricao': 'Chave codificada'
          },
          {
            'uid': 45,
            'descricao': 'Chave de automóvel'
          }
        ]
      },
      {
        'uid': 26,
        'descricao': 'Música',
        'itens': [
          {
            'uid': 132,
            'descricao': 'Baixo'
          },
          {
            'uid': 128,
            'descricao': 'Bateria'
          },
          {
            'uid': 129,
            'descricao': 'Canto'
          },
          {
            'uid': 131,
            'descricao': 'Cavaquinho'
          },
          {
            'uid': 384,
            'descricao': 'Flauta'
          },
          {
            'uid': 127,
            'descricao': 'Guitarra'
          },
          {
            'uid': 130,
            'descricao': 'Piano'
          },
          {
            'uid': 133,
            'descricao': 'Teclado'
          },
          {
            'uid': 126,
            'descricao': 'Violão'
          }
        ]
      },
      {
        'uid': 24,
        'descricao': 'Personal Organizer',
        'itens': [
          {
            'uid': 98,
            'descricao': 'Decoração'
          },
          {
            'uid': 160,
            'descricao': 'Organização de armários'
          },
          {
            'uid': 162,
            'descricao': 'Organização de documentos'
          },
          {
            'uid': 163,
            'descricao': 'Organização de mudanças'
          },
          {
            'uid': 161,
            'descricao': 'Organização de rotinas'
          },
          {
            'uid': 11,
            'descricao': 'Personal stylist'
          }
        ]
      },
      {
        'uid': 32,
        'descricao': 'Fotógrafo',
        'itens': [
          {
            'uid': 171,
            'descricao': 'Casamentos'
          },
          {
            'uid': 173,
            'descricao': 'Eventos corporativos e similares'
          },
          {
            'uid': 167,
            'descricao': 'Festas de aniversário'
          },
          {
            'uid': 169,
            'descricao': 'Festas de debutante'
          },
          {
            'uid': 166,
            'descricao': 'Festas infantis'
          },
          {
            'uid': 175,
            'descricao': 'Filmagem'
          },
          {
            'uid': 170,
            'descricao': 'Formaturas'
          }
        ]
      },
      {
        'uid': 19,
        'descricao': 'Acompanhante de Idoso',
        'itens': [
          {
            'uid': 191,
            'descricao': 'Auxiliar de enfermagem '
          },
          {
            'uid': 101,
            'descricao': 'Cuidador de idoso'
          },
          {
            'uid': 81,
            'descricao': 'Diurno'
          },
          {
            'uid': 82,
            'descricao': 'Noturno'
          }
        ]
      },
      {
        'uid': 31,
        'descricao': 'Costureiros',
        'itens': [
          {
            'uid': 156,
            'descricao': 'Ajuste em alfaiataria'
          },
          {
            'uid': 157,
            'descricao': 'Ajuste em moda festa'
          },
          {
            'uid': 164,
            'descricao': 'Bordados'
          },
          {
            'uid': 189,
            'descricao': 'Costuras de barras e ajustes'
          },
          {
            'uid': 187,
            'descricao': 'Forração de sapatos, bolsas e cintos'
          },
          {
            'uid': 158,
            'descricao': 'Peças sob medida'
          },
          {
            'uid': 186,
            'descricao': 'Pedrarias, tule e renda'
          },
          {
            'uid': 188,
            'descricao': 'Recolocação de botões e ilhós'
          },
          {
            'uid': 159,
            'descricao': 'Reformas em geral'
          }
        ]
      },
      {
        'uid': 35,
        'descricao': 'Depilação',
        'itens': [
          {
            'uid': 194,
            'descricao': 'À laser'
          },
          {
            'uid': 195,
            'descricao': 'À linha'
          },
          {
            'uid': 197,
            'descricao': 'Cera fria'
          },
          {
            'uid': 196,
            'descricao': 'Cera quente'
          },
          {
            'uid': 198,
            'descricao': 'Roll on'
          }
        ]
      },
      {
        'uid': 39,
        'descricao': 'Ar Condicionado e Ventilação',
        'itens': [
          {
            'uid': 260,
            'descricao': 'Ar condicionado'
          },
          {
            'uid': 276,
            'descricao': 'Carga de gás'
          },
          {
            'uid': 262,
            'descricao': 'Higienização de ar condicionado'
          },
          {
            'uid': 261,
            'descricao': 'Manutenção de ar condicionado'
          },
          {
            'uid': 264,
            'descricao': 'Prevenção de ar condicionado'
          },
          {
            'uid': 263,
            'descricao': 'Reparo em ar condicionado'
          },
          {
            'uid': 265,
            'descricao': 'Ventilador'
          }
        ]
      },
      {
        'uid': 44,
        'descricao': 'Animação de festas',
        'itens': [
          {
            'uid': 308,
            'descricao': 'Aluguel de equipamentos'
          },
          {
            'uid': 310,
            'descricao': 'Artistas ciscenses'
          },
          {
            'uid': 307,
            'descricao': 'Bandas'
          },
          {
            'uid': 306,
            'descricao': 'Comediantes'
          },
          {
            'uid': 311,
            'descricao': 'Esculturas com balões'
          },
          {
            'uid': 304,
            'descricao': 'Mágicos'
          },
          {
            'uid': 303,
            'descricao': 'Palhaços'
          },
          {
            'uid': 305,
            'descricao': 'Pintura facial'
          },
          {
            'uid': 309,
            'descricao': 'Recreação infantil'
          }
        ]
      },
      {
        'uid': 40,
        'descricao': 'Tapeceiro',
        'itens': [
          {
            'uid': 235,
            'descricao': 'Banquetas'
          },
          {
            'uid': 234,
            'descricao': 'Cadeiras'
          },
          {
            'uid': 233,
            'descricao': 'Capa sob medida'
          },
          {
            'uid': 231,
            'descricao': 'Cortinas'
          },
          {
            'uid': 250,
            'descricao': 'Guarda-Corpos'
          },
          {
            'uid': 103,
            'descricao': 'Limpeza de carpetes e cortinas'
          },
          {
            'uid': 229,
            'descricao': 'Mesas'
          },
          {
            'uid': 228,
            'descricao': 'Pinturas especiais'
          },
          {
            'uid': 227,
            'descricao': 'Poltronas'
          },
          {
            'uid': 226,
            'descricao': 'Reformas'
          },
          {
            'uid': 225,
            'descricao': 'Sofás'
          },
          {
            'uid': 224,
            'descricao': 'Tapeçaria automotiva'
          },
          {
            'uid': 223,
            'descricao': 'Tapetes'
          },
          {
            'uid': 222,
            'descricao': 'Tecidos'
          }
        ]
      },
      {
        'uid': 37,
        'descricao': 'Vidraceiro',
        'itens': [
          {
            'uid': 249,
            'descricao': 'Box de vidro'
          },
          {
            'uid': 253,
            'descricao': 'Espelho modelado'
          },
          {
            'uid': 259,
            'descricao': 'Impressão em espelhos'
          },
          {
            'uid': 258,
            'descricao': 'Impressão em vidros'
          },
          {
            'uid': 254,
            'descricao': 'Lapidações'
          },
          {
            'uid': 257,
            'descricao': 'Pintura em vidros'
          },
          {
            'uid': 248,
            'descricao': 'Sacadas'
          },
          {
            'uid': 252,
            'descricao': 'Tampos de vidro'
          },
          {
            'uid': 256,
            'descricao': 'Vidros jateados'
          },
          {
            'uid': 251,
            'descricao': 'Vidros temperados'
          }
        ]
      },
      {
        'uid': 14,
        'descricao': 'Motoboy'
      },
      {
        'uid': 8,
        'descricao': 'Jardineiro',
        'itens': [
          {
            'uid': 53,
            'descricao': 'Florista'
          },
          {
            'uid': 3,
            'descricao': 'Paisagista'
          },
          {
            'uid': 39,
            'descricao': 'Poda de árvore'
          },
          {
            'uid': 52,
            'descricao': 'Remoção de árvore'
          }
        ]
      },
      {
        'uid': 47,
        'descricao': 'Esteticista',
        'itens': [
          {
            'uid': 292,
            'descricao': 'Drenagem linfática'
          },
          {
            'uid': 289,
            'descricao': 'Limpeza de pele do rosto'
          },
          {
            'uid': 290,
            'descricao': 'Peeling de cristal'
          },
          {
            'uid': 293,
            'descricao': 'Termoterapia'
          },
          {
            'uid': 291,
            'descricao': 'Tratamento para acne'
          }
        ]
      },
      {
        'uid': 34,
        'descricao': 'Alimentos e Bebidas',
        'itens': [
          {
            'uid': 317,
            'descricao': 'Bolos'
          },
          {
            'uid': 180,
            'descricao': 'Carrinho de algodão doce'
          },
          {
            'uid': 184,
            'descricao': 'Carrinho de churros'
          },
          {
            'uid': 183,
            'descricao': 'Carrinho de crepe'
          },
          {
            'uid': 182,
            'descricao': 'Carrinho de hot dog'
          },
          {
            'uid': 178,
            'descricao': 'Carrinho de pipoca'
          },
          {
            'uid': 181,
            'descricao': 'Carrinho de sorvete'
          },
          {
            'uid': 79,
            'descricao': 'Drinks especiais'
          }
        ]
      },
      {
        'uid': 7,
        'descricao': 'Marceneiro',
        'itens': [
          {
            'uid': 6,
            'descricao': 'Montagem de móveis'
          },
          {
            'uid': 48,
            'descricao': 'Móveis sob medida'
          },
          {
            'uid': 61,
            'descricao': 'Piso e revestimento'
          },
          {
            'uid': 49,
            'descricao': 'Restauração de móveis'
          },
          {
            'uid': 55,
            'descricao': 'Telhadista'
          }
        ]
      },
      {
        'uid': 51,
        'descricao': 'Conserto de eletrodomésticos',
        'itens': [
          {
            'uid': 334,
            'descricao': 'Conserto'
          },
          {
            'uid': 333,
            'descricao': 'Manutenção'
          }
        ]
      },
      {
        'uid': 49,
        'descricao': 'Dedetização',
        'itens': [
          {
            'uid': 324,
            'descricao': 'Descupinização'
          },
          {
            'uid': 322,
            'descricao': 'Desinsetização'
          },
          {
            'uid': 323,
            'descricao': 'Desratização'
          },
          {
            'uid': 325,
            'descricao': 'Repelência a pombos'
          }
        ]
      },
      {
        'uid': 43,
        'descricao': 'Quiropraxista',
        'itens': [
          {
            'uid': 319,
            'descricao': 'Orientações de hábitos'
          },
          {
            'uid': 318,
            'descricao': 'Técnicas manuais'
          },
          {
            'uid': 320,
            'descricao': 'Técnicas posturais'
          }
        ]
      },
      {
        'uid': 42,
        'descricao': 'Lavanderia',
        'itens': [
          {
            'uid': 267,
            'descricao': 'Impermeabilização'
          },
          {
            'uid': 266,
            'descricao': 'Lavagem a seco'
          },
          {
            'uid': 268,
            'descricao': 'Limpeza a água'
          }
        ]
      },
      {
        'uid': 41,
        'descricao': 'Serralheiro',
        'itens': [
          {
            'uid': 242,
            'descricao': 'Abraçadeiras '
          },
          {
            'uid': 244,
            'descricao': 'Alambrado'
          },
          {
            'uid': 241,
            'descricao': 'Arabescos'
          },
          {
            'uid': 243,
            'descricao': 'Caixilhos'
          },
          {
            'uid': 237,
            'descricao': 'Corrimão'
          },
          {
            'uid': 240,
            'descricao': 'Escadas'
          },
          {
            'uid': 236,
            'descricao': 'Grades'
          },
          {
            'uid': 238,
            'descricao': 'Guarda-Corpos'
          },
          {
            'uid': 247,
            'descricao': 'Janelas'
          },
          {
            'uid': 245,
            'descricao': 'Mezanino'
          },
          {
            'uid': 246,
            'descricao': 'Portas pantográficas'
          },
          {
            'uid': 239,
            'descricao': 'Portões'
          }
        ]
      },
      {
        'uid': 36,
        'descricao': 'Acupuntura',
        'itens': [
          {
            'uid': 199,
            'descricao': 'Auricular'
          },
          {
            'uid': 203,
            'descricao': 'Coreana'
          },
          {
            'uid': 202,
            'descricao': 'Japonesa'
          },
          {
            'uid': 204,
            'descricao': 'Médica'
          },
          {
            'uid': 201,
            'descricao': 'Tradicional chinesa'
          },
          {
            'uid': 205,
            'descricao': 'Veterinária'
          }
        ]
      },
      {
        'uid': 30,
        'descricao': 'Lavagem de Carro',
        'itens': [
          {
            'uid': 155,
            'descricao': 'Chassis'
          },
          {
            'uid': 151,
            'descricao': 'Cristalização '
          },
          {
            'uid': 152,
            'descricao': 'Enceramento'
          },
          {
            'uid': 150,
            'descricao': 'Espelhamento'
          },
          {
            'uid': 153,
            'descricao': 'Hidratação de couro'
          },
          {
            'uid': 147,
            'descricao': 'Higienização'
          },
          {
            'uid': 148,
            'descricao': 'Higienização de ar condicionado'
          },
          {
            'uid': 154,
            'descricao': 'Impermeabilização'
          },
          {
            'uid': 145,
            'descricao': ' Lavagem a seco'
          },
          {
            'uid': 149,
            'descricao': 'Motor'
          },
          {
            'uid': 146,
            'descricao': 'Polimento '
          }
        ]
      },
      {
        'uid': 15,
        'descricao': 'Motorista',
        'itens': [
          {
            'uid': 32,
            'descricao': 'Carro próprio'
          },
          {
            'uid': 214,
            'descricao': 'Transporte para deficientes'
          }
        ]
      },
      {
        'uid': 9,
        'descricao': 'Serviços Gerais',
        'itens': [
          {
            'uid': 217,
            'descricao': 'Antena digital'
          },
          {
            'uid': 111,
            'descricao': 'Aquecedores'
          },
          {
            'uid': 381,
            'descricao': 'Cerca elétrica'
          },
          {
            'uid': 218,
            'descricao': 'Gasista'
          },
          {
            'uid': 65,
            'descricao': 'Impermeabilização'
          },
          {
            'uid': 44,
            'descricao': 'Manutenção de eletrodomésticos'
          },
          {
            'uid': 216,
            'descricao': 'Papel de parede'
          },
          {
            'uid': 43,
            'descricao': 'Piscineiro'
          },
          {
            'uid': 102,
            'descricao': 'Portão eletrônico'
          },
          {
            'uid': 379,
            'descricao': 'Quadros decorativos'
          },
          {
            'uid': 221,
            'descricao': 'Redes de proteção'
          },
          {
            'uid': 88,
            'descricao': 'Rufos e Calhas'
          },
          {
            'uid': 382,
            'descricao': 'Sistema de alarme'
          }
        ]
      },
      {
        'uid': 18,
        'descricao': 'Cabeleireiro',
        'itens': [
          {
            'uid': 35,
            'descricao': 'Alisamento'
          },
          {
            'uid': 332,
            'descricao': 'Corte feminino'
          },
          {
            'uid': 91,
            'descricao': 'Corte masculino'
          },
          {
            'uid': 16,
            'descricao': 'Design de sobrancelhas'
          },
          {
            'uid': 96,
            'descricao': 'Escova'
          },
          {
            'uid': 33,
            'descricao': 'Penteado para festas'
          },
          {
            'uid': 31,
            'descricao': 'Tintura'
          }
        ]
      },
      {
        'uid': 6,
        'descricao': 'Eletricista',
        'itens': [
          {
            'uid': 120,
            'descricao': 'Bombas e motores'
          },
          {
            'uid': 72,
            'descricao': 'Cabeamento'
          },
          {
            'uid': 115,
            'descricao': 'Cálculos elétricos'
          },
          {
            'uid': 114,
            'descricao': 'Chuveiros'
          },
          {
            'uid': 121,
            'descricao': 'Desenhos elétricos'
          },
          {
            'uid': 47,
            'descricao': 'Esconde fiação'
          },
          {
            'uid': 116,
            'descricao': ' Fiações elétricas '
          },
          {
            'uid': 18,
            'descricao': 'Home theater'
          },
          {
            'uid': 383,
            'descricao': 'Interfone'
          },
          {
            'uid': 59,
            'descricao': 'Manutenção de eletrodomésticos'
          },
          {
            'uid': 119,
            'descricao': 'Padrão de entrada '
          },
          {
            'uid': 117,
            'descricao': 'Quadros elétricos'
          },
          {
            'uid': 106,
            'descricao': 'Suporte de televisão'
          },
          {
            'uid': 118,
            'descricao': 'Ventiladores'
          }
        ]
      }
    ];
  }


  getTipoPessoa() {
    return [
      {
        value: false,
        label: 'Sou solicitante'
      },
      {
        value: true,
        label: 'Sou profissional'
      }
    ];
  }

  getOptionSimOuNao() {
    return [
      {
        value: true,
        label: 'Sim'
      },
      {
        value: false,
        label: 'Não'
      }];
  }


  aplicaCssNotificacao(visualizado) {
    return {
      'list-group-item-primary': !visualizado
    }
  }

  aplicaCssLinkButton(tipo) {

    return {
      'btn-primary': tipo === 'facebook',
      'btn-info': tipo === 'twitter',
      'btn-secondary': tipo === 'linkedin',
      'btn-warning': tipo === 'instagram',
      'btn-light': tipo === 'google',
      'btn-success': tipo === 'site',
      'btn-dark': tipo === 'github'
    }
  }

  aplicaCssLinkListGroupItem(tipo) {
    return {
      'list-group-item-primary': tipo === 'facebook',
      'list-group-item-info': tipo === 'twitter',
      'list-group-item-secondary': tipo === 'linkedin',
      'list-group-item-warning': tipo === 'instagram',
      'list-group-item-light': tipo === 'google',
      'list-group-item-success': tipo === 'site',
      'list-group-item-dark': tipo === 'github'
    }
  }

  aplicaCssNotificacaoNaoVisualizado(visualizado) {
    if (!visualizado) {
      return {
        'border-right-color': '#17a2b8',
        'border-right-width': '10px',
        'border-left-width': '0',
        'border-top-width': '0',
        'border-bottom-width': '0',
        'border-style': 'solid'
      }
    }

    return {}
  }


  aplicaCssLinkIcon(tipo) {
    return {
      'fa-facebook': tipo === 'facebook',
      'fa-twitter': tipo === 'twitter',
      'fa-linkedin': tipo === 'linkedin',
      'fa-instagram': tipo === 'instagram',
      'fa-google': tipo === 'google',
      'fa-link': tipo === 'site',
      'fa-github': tipo === 'github'
    }
  }

  aplicaCssStatusServico(status) {
    return {
      'btn-success': status === 'disponivel',
      'btn-danger': status === 'cancelado',
      'btn-info': status === 'finalizado'
    }
  }

  getStatus(status) {
    switch (status) {
      case 'disponivel':
        return 'Disponível';

      case 'cancelado':
        return 'Cancelado';

      case 'finalizado':
        return 'Finalizado';

      default :
        return 'Indisponível';
    }
  }

  aplicaCssTipoFeedback(tipo) {
    return {
      'badge-info': tipo === 'duvida',
      'badge-success': tipo === 'sugestao',
      'badge-danger': tipo === 'reclamacao'
    }
  }

  getTipoFeedback(tipo) {
    switch (tipo) {
      case 'duvida':
        return 'Dúvida';

      case 'sugestao':
        return 'Sugestão';

      case 'reclamacao':
        return 'Reclamação';

      default :
        return 'Dúvida';
    }
  }

  constructor() {
  }

  getDefaultValueServico() {
    return {
      'candidatos': [
        {
          'foto': 'https://lh5.googleusercontent.com/-5Nk3cQfH0d8/AAAAAAAAAAI/AAAAAAAANKA/Mgyy6fH-t0U/photo.jpg',
          'nome': 'Willian Ricardo Da Silva',
          'uid': 'UEClGY0FAfdZLXoEaoDn8AUD5Tt1'
        }
      ],
      'categorias': [],
      'dataCadastro': '2017-01-26T16:12:22.032Z',
      'dataConclusao': '',
      'dataPrevisao': '2017-01-26T16:12:22.032Z',
      'descricao': 'Limpar a casa, passar aspirador, colocar roupa na máquina, lavar louça',
      'endereco': {
        'bairro': 'Centro',
        'cep': '86990000',
        'cidade': 'Marialva',
        'estado': 'PR',
        'maps': {
          'lat': -51.7941847,
          'lng': -23.4909138
        },
        'numero': '727',
        'rua': 'Avenida Cristovão Colombo'
      },
      'observacao': '',
      'status': 'avaliacao',
      'titulo': 'Diarista 1 dia por semana',
      'uid': '-Kt8FmoURvbMIZTvyEEY',
      'usuario': {
        'foto': 'https://lh5.googleusercontent.com/-5Nk3cQfH0d8/AAAAAAAAAAI/AAAAAAAANKA/Mgyy6fH-t0U/photo.jpg',
        'nome': 'Willian Ricardo Da Silva',
        'uid': 'UEClGY0FAfdZLXoEaoDn8AUD5Tt1'
      },
      'valor': 0
    }
  }

  getDefaultValuePerfil() {
    return {
      'aceitaCartao': false,
      'ativo': true,
      'autonomo': false,
      'avaliacao': [
        {
          'nota': 0,
          'dataCadastro': '2017-01-27T16:15:05.421Z',
          'servico': {
            'uid': '588010e73e0ba313c0987ab8',
            'titulo': 'Desenvolvedor JavaScript'
          },
          'texto': 'Um Otimo Deenvolvedor, atendeu a todos os requisitos e tempo',
          'usuario': {
            'uid': '588010e73e0ba313c0987ab8',
            'nome': 'Willian Ricardo da Silva'
          },
          'visualizado': false
        },
        {
          'nota': 5,
          'dataCadastro': '2017-01-27T16:15:05.421Z',
          'servico': {
            'uid': '588010e73e0ba313c0987ab8',
            'titulo': 'Diarista 3 vezes na semana'
          },
          'texto': 'Limpa, passa e cozinha, comforme combinado!',
          'usuario': {
            'uid': '588010e73e0ba313c0987ab8',
            'nome': 'Juliana De Oliveira'
          },
          'visualizado': false
        },
        {
          'nota': 3,
          'dataCadastro': '2017-01-27T16:15:05.421Z',
          'servico': {
            'uid': '588010e73e0ba313c0987ab8',
            'titulo': 'Aulas de JavaScript'
          },
          'texto': 'Esse Cara É Foda',
          'usuario': {
            'uid': '588010e73e0ba313c0987ab8',
            'nome': 'Willian Ricardo da Silva'
          },
          'visualizado': false
        }
      ],
      'categorias': [],
      mensagens: [{
        'uid': 'chat1',
        'servico': {
          'uid': '58814bc31771011d182d8318',
          'titulo': 'Diarista por uma semana'
        },
        'usuario': {
          'foto': 'https://lh5.googleusercontent.com/-5Nk3cQfH0d8/AAAAAAAAAAI/AAAAAAAANKA/Mgyy6fH-t0U/photo.jpg',
          'nome': 'Camila Leandro Barbosa',
          'uid': 'UEClGY0FAfdZLXoEaoDn8AUD5Tt1'
        },
        visualizado: false
      },
        {
          'uid': 'chat1',
          'servico': {
            'uid': '58814bc31771011d182d8318',
            'titulo': 'Diarista por uma semana'
          },
          'usuario': {
            'foto': 'https://lh5.googleusercontent.com/-5Nk3cQfH0d8/AAAAAAAAAAI/AAAAAAAANKA/Mgyy6fH-t0U/photo.jpg',
            'nome': 'Willian Ricardo Da Silva',
            'uid': 'UEClGY0FAfdZLXoEaoDn8AUD5Tt1'
          },
          visualizado: false
        }],
      'cpf': '07123927931',
      'dataCadastro': '2017-01-26T16:12:22.032Z',
      'descricao': 'Quem busca uma nova posição ou vaga no mercado de trabalho deve saber que ter em mente algumas frases para colocar no objetivo do curriculum pode fazer toda a diferença. Afinal, nos dias de hoje, a objetividade e a certeza do que um candidato procura para a sua vida profissional são quesitos bastante valorizados pela grande maioria dos recrutadores.',
      'email': 'willian_ricardo08@hotmail.com',
      'endereco': {
        'bairro': 'Centro',
        'cep': '86990000',
        'cidade': 'Marialva',
        'maps':
          {
            'lat': -51.7941847,
            'lng': -23.4909138
          },
        'numero': '727',
        'rua': 'Avenida Cristovão Colombo',
        'estado': 'PR'
      },
      'favoritos': [
        {
          uid: '58814af43c39072bb0ee6d0d',
          nome: 'Willian Ricardo Da Silva',
          foto: ''
        },
        {
          uid: '58814af43c39072bb0ee6d0d',
          nome: 'João Neves De Oliveira',
          foto: ''
        }
      ],
      'fones': [
        '(44) 99977-7431',
        '(44) 3232-3769'
      ],
      'foto': 'https://lh5.googleusercontent.com/-5Nk3cQfH0d8/AAAAAAAAAAI/AAAAAAAANKA/Mgyy6fH-t0U/photo.jpg',
      'links': [
        {
          'nome': 'Site',
          'tipo': 'site',
          'url': 'https://www.querotrampar.com.br'
        },
        {
          'nome': 'LinkedIn',
          'tipo': 'linkedin',
          'url': 'https://www.linkedin.com/in/willianricardodasilva'
        },
        {
          'nome': 'Twitter',
          'tipo': 'twitter',
          'url': 'https://twitter.com/willian_mineiro'
        },
        {
          'nome': 'Facebook',
          'tipo': 'facebook',
          'url': 'https://www.facebook.com/profile.php?id=100001440800966&ref=bookmarks'
        },
        {
          'nome': 'Instagram',
          'tipo': 'instagram',
          'url': 'https://www.instagram.com/willian_ricardo08/'
        },
        {
          'nome': 'Google',
          'tipo': 'google',
          'url': 'https://plus.google.com/+WillianRicardoDaSilva'
        },
        {
          'nome': 'Github',
          'tipo': 'github',
          'url': 'https://github.com/willianricardo'
        }
      ],
      'nome': 'Willian Ricardo Da Silva',
      'nota': 5,
      'observacao': '1. Gostaria de fazer parte da equipe de funcionários da empresa, tendo o objetivo de crescer profissionalmente e de maneira produtiva, contribuindo para o desenvolvimento da organização como um todo.\n\n2. Procuro novos desafios profissionais e uma efetivação no mercado, tendo o desenvolvimento de minhas habilidades e a geração de resultados como objetivo, viabilizando um crescimento qualitativo e quantitativo para a empresa.\n\n3. Busco uma vaga no mercado onde possa colocar minhas habilidades em prática e colaborar com equipes de trabalho, tendo o crescimento da organização e o desenvolvimento pessoal e profissional como focos principais.\n\n4. Procuro uma efetivação no mercado para colocar em prática o que já aprendi ao longo do meu tempo como profissional, desenvolvendo minhas habilidades e contribuindo para o crescimento da empresa.',
      'servicosDisponibilizados': [
        {
          'uid': '58814bc31771011d182d8318',
          'titulo': 'Diarista por uma semana'
        },
        {
          'uid': '58814bc31771011d182d8318',
          'titulo': 'Programador PHP'
        },
        {
          'uid': '58814bc31771011d182d8318',
          'titulo': 'Colheita de Uva'
        }
      ],
      'servicosInscritos': [

        {
          'uid': '58814bc31771011d182d8318',
          'titulo': 'Programador PHP'
        },
        {
          'uid': '58814bc31771011d182d8318',
          'titulo': 'Colheita de Uva'
        }
      ],
      'uid': 'UEClGY0FAfdZLXoEaoDn8AUD5Tt1'
    };
  }

  unmaskNumbers(num = '') {
    return num.replace(/\D/g, '');
  }

  mascaraCpfCnpj(valor) {
    valor = this.unmaskNumbers(valor);

    if (valor.length <= 11) {
      return valor.substring(0, 3) + '.' +
        valor.substring(3, 6) + '.' +
        valor.substring(6, 9) + '-' +
        valor.substring(9, 11);
    } else {
      return valor.substring(0, 2) + '.' +
        valor.substring(2, 5) + '.' +
        valor.substring(5, 8) + '/' +
        valor.substring(8, 12) + '-' +
        valor.substring(12, 14);
    }
  }

  mascaraFone(fone) {
    fone = this.unmaskNumbers(fone);

    if (fone.length === 10) {
      return '(' + fone.substring(0, 2) + ') ' +
        fone.substring(2, 6) + '-' +
        fone.substring(6, 10);
    } else if (fone.length === 11) {
      return '(' + fone.substring(0, 2) + ') ' +
        fone.substring(2, 7) + '-' +
        fone.substring(7, 11);
    }

    return fone;
  }
}
