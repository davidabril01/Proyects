all: compile link

compile:
	g++ -Isrc/include -c main.cpp
	g++ -Isrc/include -c graphAnaliser.cpp
	
link:
	g++ main.o graphAnaliser.o -o main -Lsrc/lib -lsfml-graphics -lsfml-window -lsfml-system