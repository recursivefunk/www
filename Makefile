.DEFAULT_GOAL := all

NODE := $(shell which node)
YARN := $(shell which yarn)
NODE_ENV := ${NODE_ENV}

all: install lint build
.PHONY: all

ci: lint build
.PHONY: ci

install:
	$(YARN) install
.PHONY: install

build:
	$(YARN) build
.PHONY: build

lint:
	$(YARN) lint
.PHONY: lint
