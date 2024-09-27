---
title: Branch Strategy
language: en
---

## Main Branches

### main (or master) Branch

- The production-ready code.
- Only contains thoroughly tested and stable code.
- Direct commits are restricted; only allowed through pull requests (PRs) after code review and approval.
  
### develop Branch

- The latest codebase reflecting the current state of development.
- All features and fixes are integrated into this branch before being merged into main.
- Serves as a base for all new feature branches.

## Supporting Branches

### Feature Branches

- Naming Convention: `Feature/<feature-name>`
- Created from: `develop`
- Purpose: For developing new features or enhancements.
- Merging: Once complete and tested, merge back into develop.

### Bugfix Branches

- Naming Convention: `Bug/<issue-id>`
- Created from: `develop` (or `release` if the fix is for an upcoming release)
- Purpose: For fixing bugs identified during development.
- Merging: Merge back into develop (or release if applicable) once fixed.

### Release Branches

- Naming Convention: `Release/<version-number>`
- Created from: `develop`
- Purpose: To prepare for a new production release.
- Activities: Final testing, bug fixing, and preparing release notes.
- Merging: Merge into both main and develop once ready.

### Hotfix Branches

- Naming Convention: `Hotfix/<issue-id>`
- Created from: `main`
- Purpose: For urgent fixes that need to go directly into production.
- Merging: Merge into both main and develop once applied.

## Branch Workflow

1. Feature Development:

- Create a branch from `develop` using `Feature/<feature-name>`.
- Implement the feature, commit changes, and push the branch to the repository.
- Open a pull request to merge the `feature` branch into `develop`.
- Conduct code reviews, perform necessary tests, and merge the changes into `develop`.

2. Bug Fixing:

- Create a branch from `develop` using `Bug/<issue-id>`.
- Fix the bug, commit changes, and push the branch.
- Open a pull request to merge the `Bug` branch into `develop`.
- After reviews and tests, merge the changes into `develop`.

3. Release Preparation:

- Create a branch from `develop` using `Release/<version-number>`.
- Perform final testing, fix any last-minute bugs, and update documentation.
- Merge the release branch into both `main` and `develop` once ready.

4. Hotfixes:

- Create a branch from `main` using `Hotfix/<issue-id>`.
- Apply the fix, commit changes, and push the branch.
- Open a pull request to merge the hotfix branch into `main`.
- Merge changes into `develop` to include the fix in ongoing development.

## Best Practices

> **Regular Merges**: Merge develop into feature branches regularly to stay updated and avoid integration issues.

> **Code Reviews**: Conduct mandatory code reviews before merging any branch to ensure quality and adherence to standards.

> **Automated Testing**: Implement continuous integration with automated testing to catch issues early and maintain code quality.

> **Documentation**: Keep all changes well-documented, including comments in code, update logs, and comprehensive commit messages.
