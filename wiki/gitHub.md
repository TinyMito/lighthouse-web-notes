# GitHub Setup
#### Adding SSH Token to GitHub
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

#### Check GitHub Authorization
```
ssh -T git@github.com
```

More information [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

#### Set Author for Commit
```
git config --global user.email 'your_email@example.com'
git config --global user.name 'user_name'

```

#### Setup a new directory for commit
```
git init
git remote add origin <git_ssh_url>
git config --global push.default current
git branch --set-upstream-to=origin/main main
```

#### List current configuration
```
git config --list
git config --global --list
```

## How-To
#### Check GitHub status
```
git status
```

#### Clone
```
git clone <git_ssh_url> <folder_name>
```

#### Pull
```
git pull <git_ssh_url>
```

#### Add & Commit & Push
```
git add *
git commit -m 'Comment'
git push origin main
```
Single line command
```
git add * && git commit -m 'comment' && git push origin main
```

#### Reset before Commit
```
git reset <folder_file>
```
## Deletion
#### Delete local file
By single file or folder
```
git rm <folder_file>
```

#### Delete files & folders marked as --deleted
This is useful for clean up local deleted files also on repo.
```
git ls-files --deleted -z | xargs -0 git rm
```

## Deletion on Repository only
#### Remove file / folder
This command will remove the folder from the Git repository, but leave the actual folder and its contents on disk. The `--cached` option ensures that the files are removed from the Git index, but not from the local file system.
```
git rm -r --cached path/to/folder
```
```
git commit -m "Removed folder from repository"
```
```
git push
```

## Restoration
#### Restore / revert changes on file
```
git restore <file>
```

#### Restore folder marked for deletion
```
git restore --staged folder
```

#### Retore back to your working directory
```
git restore folder
```