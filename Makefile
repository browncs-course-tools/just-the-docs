.PHONY: setup build serve clean

all: build

# First time setup:
#  - Configure bundler to install a separate copy of dependencies for this repo only
#  - Install dependencies from the Gemfile
setup:
	bundle config set --local path 'vendor/bundle'
	bundle install

# Compile the site to the _site directory
build:
	bundle exec jekyll build

# Compile the site and start a webserver to preview it
serve: build
	bundle exec jekyll serve --incremental

# Delete all generated files
clean:
	bundle exec jekyll clean
