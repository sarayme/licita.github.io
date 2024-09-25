import json
import re
import unicodedata
from datetime import date


class Municipio:

    def __init__(self, municipio):
        municipio = municipio.rstrip().replace('\n', '')  # limpeza inicial
        # Alguns nomes de municípios possuem um /PB no final
        municipio = re.sub("(\/PB.*|GABINETE DO PREFEITO.*|PODER.*|http.*|PORTARIA.*|Extrato.*|ATA DE.*|SECRETARIA.*|Secretaria.*|Fundo.*|SETOR.*|ERRATA.*|- AL.*|GABINETE.*|RATIFICAÇÃO.*)", "", municipio)
        self.id = self._computa_id(municipio)
        self.nome = municipio

    def _computa_id(self, nome_municipio):
        ret = nome_municipio.strip().lower().replace(" ", "-")
        ret = unicodedata.normalize('NFKD', ret)
        ret = ret.encode('ASCII', 'ignore').decode("utf-8")
        return ret

    def __hash__(self):
        return hash(self.id)

    def __eq__(self, other):
        return self.id == other.id

    def __str__(self):
        return json.dumps(self.__dict__, indent=2, default=str, ensure_ascii=False)


class Diario:

    _mapa_meses = {
        "Janeiro": 1,
        "Fevereiro": 2,
        "Março": 3,
        "Abril": 4,
        "Maio": 5,
        "Junho": 6,
        "Julho": 7,
        "Agosto": 8,
        "Setembro": 9,
        "Outubro": 10,
        "Novembro": 11,
        "Dezembro": 12,
    }

    def __init__(self, municipio: Municipio, cabecalho: str, texto: str):
        self.municipio = municipio.nome
        self.id = municipio.id
        self.cabecalho = cabecalho
        self.texto = texto.rstrip()
        self.data_publicacao = self._extrai_data_publicacao(cabecalho)

    def _extrai_data_publicacao(self, pb_header: str):
        match = re.findall(
            r".*(\d{2}) de (\w*) de (\d{4})", pb_header, re.MULTILINE)[0]
        mes = Diario._mapa_meses[match[1]]
        return date(year=int(match[2]), month=mes, day=int(match[0]))

    def __hash__(self):
        return hash(self.id)

    def __eq__(self, other):
        return self.id == other.id

    def __str__(self):
        return json.dumps(self.__dict__, indent=2, default=str, ensure_ascii=False)
