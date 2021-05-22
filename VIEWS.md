# Dashboard
 - `/`
    Elementy
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie
 - `/login`
    Elementy
    - pola na login i hasło 
    - guzik do zalogowania (link do dashbordu)

# Widok dostępności stoików
- `/tables`
    Elementy
    - wybór daty i godziny
    - tabela z listą rezerwacji oraz wydarzeń
        - każda kolumna = 1 stolik
        - każdy wiersz = 30 minut
        - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
        - po kliknięciu rezerwacji lub eventu przechodzimy na stonę szczegółów 

- `/tables/booking/:id`
    Elementy
    - wszystkie informacje dotyczące rezerwacji
    - umożliwia edycję i zapisanie zmian
- `/tables/booking/new`
    Elementy
    - analigicznie do powyższej, bez początkowej informacji

- `/tables/events/:id`
    Elementy
    - analigicznie do powyższej, dla eventów
- `/tables/events/new`
    Elementy
    - analigicznie do powyższej, dla eventów, bez początkowej informacji 

# Widok kelnera
- `/waiter`
    Elementy
    - tabela
        - w wierszach stoliki
        - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
        - w ostatniej kolumnie dostępne akcje dla danego stolika 

- `/waiter/order/new`
    Elementy
    - numer stolika (edytowalny)
    - menu produktów 
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwotę zamówienia 

- `/waiter/order/:id`
    Elementy
    - jak powyżej 

# Widok kuchni
- `/kitchen`
    Elementy
    - lista zamówień w kolejności ich złożenia
    - lista musi zawierać:
        - numer stolika (lub zamówienia zdalnego)
        - pełne informacje dot. zamówionych dań
    - na liście musi być możliwość oznaczenia zamówienia jako zrealizowany
