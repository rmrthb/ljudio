create table nodemusic.example_colors
(
    id    int identity
        constraint example_colors_pk
            primary key nonclustered,
    value varchar(255) not null
)
go

INSERT INTO example_colors (id, value) VALUES (1, N'red');
INSERT INTO example_colors (id, value) VALUES (2, N'blue');
INSERT INTO example_colors (id, value) VALUES (3, N'pink');
INSERT INTO example_colors (id, value) VALUES (4, N'purple');