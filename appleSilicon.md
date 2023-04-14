# Apple Silicon Setup
### Install Xcode
- Download [Xcode](https://apps.apple.com/ca/app/xcode/id497799835?mt=12) from the App Store
- Open the terminal App and type `git` and `Enter` to confirm the installation was complete

### Install Homebrew
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Install Additional Packages
```
brew install libpq postgresql@14 rbenv ruby-build
```

### Install NVM
```
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

Open `nano ~/.zprofile`

Paste the following into it.
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Confirm installation
```
nvm -v
```

Install Node
```
nvm install 15
```

### RBenv & Ruby
```
rbenv install 3.1.1
```
```
rbenv init
```
Open `nano ~/.zprofile`

```
rbenv global 3.1.1
```

Confirm installation
```
ruby -v
```

```
gem install bundler:1.16.1
```

## Additional Setup for Python on Apple Silicon
Due to the macOS has now built-in native `Python3` calling but a lot of older script still call by `python`.

```
brew install pyenv
```
```
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```
```
pyenv install -l
```
```
pyenv install 3.10.11
```
```
pyenv global 3.10.11
```
```
echo 'eval "$(pyenv init --path)"' >> ~/.zshrc
```
```
exec zsh
```