# GitHub Setup
### Adding SSH Token to GitHub
macOS
```
eval `ssh-agent -s`
ssh-keygen -t ed25519 -C "your_email@example.com"
```
Copy and Paste the key [here](https://github.com/settings/keys)

macOS add to keychain
```
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

### Check GitHub Authorization
```
ssh -T git@github.com
```

More information [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### Set Author for Commit
```
git config --global user.email 'your_email@example.com'
git config --global user.name 'user_name'
git config --global --list
```

### Setup a new directory for commit
```
git init
git remote add origin <git_ssh_url>
```

## How-To
### Check GitHub status
```
git status
```

### Clone
```
git clone <git_ssh_url> <folder_name>
```

### Pull
```
git pull <git_ssh_url>
```

### Add > Commit > Push
```
git add *
git commit -m 'Comment'
git push origin main
```

### Reset before Commit
```
git reset <folder_file>
```

### Remove after Commit
By single file or folder
```
git rm <folder_file>
```

### Remove files & folders marked as --deleted
This is useful for clean up local deleted files also on repo.
```
git ls-files --deleted -z | xargs -0 git rm
```