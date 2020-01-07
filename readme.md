# Seme Framework AdminHTML Theme
This pilot project for dmin HTML Theme for Seme Framework.

## Installation
Open your terminal or CMD:
- Change dir into desired directory, example if using XAMPP : 
  - [WINDOWS] `cd d:\XAMPP\htdocs\` or
  - [MAC] `cd /Applications/XAMPP/htdocs/` or
  - [LINUX] `cd /opt/LAMPP/htdocs/` or
- If using  Apache or Nginx
  - `cd /var/www/html/`
- and then `git clone https://github.com/drosanda/seme_adminhtml.git seme_adminhtml`
- after cloned run `cd seme_adminhtml`
- and then run `npm install`

## Configuration
First open and edit config-default.yaml and please fill your URL fit with your local server configuration. Example:
- If we use configuration before, please fill URL with http://localhost/seme_adminhtml/

*Before running the package, please make sure you have started your web server.*

### Sources
The sources are in src/assets/ directory. we use gulp, webpack and browsersync.

#### SCSS
The source of SCSS are in src/assets/scss/.

#### JS
The source of JS are in src/assets/JS/.

## Running Development
For running or gulp watch simply use 
`npm start` command.

## Build Dev Version
For create development build simply use `npm run dev` command.

## Build Production Version
For create production build simply use `npm run build` command.

## Build Production Ready Package 
For create production build simply use `npm run package` command.

## Contributors
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

### Pull Request Process
Ensure any install or build dependencies are removed before the end of the layer when doing a build.
Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is SemVer.
You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

#### License
This source code licensed under [MIT](https://opensource.org/licenses/mit-license.html).
