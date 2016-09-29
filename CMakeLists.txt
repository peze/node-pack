cmake_minimum_required(VERSION 3.6)
project(nodejs_pack)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")

set(SOURCE_FILES
    build/binding.Makefile
    build/config.gypi
    build/gyp-mac-tool
    build/hipack.target.mk
    build/Makefile
    example/packit.js
    nbproject/private/configurations.xml
    nbproject/private/private.properties
    nbproject/private/private.xml
    nbproject/configurations.xml
    nbproject/Package-Default.bash
    nbproject/project.properties
    nbproject/project.xml
    test/speedtest.js
    test/test.js
    binding.gyp
    hello.cc
    hipack.js
    Makefile
    pack.c
    pack.cc
    pack.h
    package.json
    README
    README.md
    test.js
    wscript pack.bak.cpp)

add_executable(nodejs_pack ${SOURCE_FILES})