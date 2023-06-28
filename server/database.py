import datetime as dt
import random
from pprint import pprint

from sqlalchemy import String, Integer, select
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, Session
from sqlalchemy_utils import database_exists, create_database

## pip install mysql-connector-python

class Base(DeclarativeBase):
    pass


class Element(Base):
    __tablename__ = "periodicTable"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    atomic_number: Mapped[int] = mapped_column(Integer, nullable=False)
    element_name: Mapped[str] = mapped_column(String(20), nullable=False)
    element_symbol: Mapped[str] = mapped_column(String(5), nullable=False)
    name_origin: Mapped[str] = mapped_column(String(500), nullable=False)
    about: Mapped[str] = mapped_column(String(1000), nullable=True)

db_name = "WordsDB"
db_conn = f"mysql+mysqlconnector://root@localhost:3306/{db_name}"

engine = create_engine(db_conn, echo=True)
if not database_exists(db_conn):
    create_database(db_conn)

Base.metadata.create_all(engine)

# ----------------- queries ---------------------------- ##

def add_element(number, name, symbol, name_origin):

    with Session(engine) as session:
        element = Element(
            atomic_number=number,
            element_name=name,
            element_symbol=symbol,
            name_origin=name_origin
        )
        session.add(element)
        session.commit()


def select_elements():
    with Session(engine) as session:
        q = select(Element)
        res = session.scalars(q).all()
        elements = []
        for item in res:
            element_dict = vars(item)
            element_dict.pop("_sa_instance_state")
            elements.append(element_dict)

        return elements


def select_element_by(identifier, value):
    """Identifier: A (atomic number), name or symbol."""
    with Session(engine) as session:
        try:
            if identifier == "A":
                q = select(Element).where(Element.atomic_number == value)

            elif identifier == "name":
                q = select(Element).where(Element.element_name == value)

            elif identifier == "symbol":
                q = select(Element).where(Element.element_symbol == value)
            else:
                return {"Error": "Identifier has to be 'A', 'name' or 'symbol'"}
            res = vars(session.scalars(q).first())
            res.pop("_sa_instance_state")
            return res
        except Exception as e:
            return None


def select_random_element():
    with Session(engine) as session:
        A = random.randint(1, 118)
        q = select(Element).where(Element.atomic_number == A)
        res = vars(session.scalars(q).first())
        res.pop("_sa_instance_state")
        return res
