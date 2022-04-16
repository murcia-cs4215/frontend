# Frontend for OContract Demonstration

**Note: This repository does not contain the code for OContract.**

The code for OContract can be found at: <https://github.com/murcia-cs4215/ocontract>

The repository used for frontend deployment can be found at: <https://github.com/murcia-cs4215/frontend>

## Getting Started

Follow the following steps:

```bash
git clone https://github.com/murcia-cs4215/frontend.git
cd frontend
yarn install
yarn start
```

Then visit http://localhost:8000 to see the application run locally.

## Update OContract

To update the version of OContract, first make a [new release of OContract](https://github.com/murcia-cs4215/ocontract/releases).

Then update the `package.json` accordingly:

```json
    "ocontract": "github:murcia-cs4215/ocontract#v1.0.4",
```

You can also attach a commit hash instead of the version, i.e.

```json
    "ocontract": "github:murcia-cs4215/ocontract#f61743e06f760b11e60ea18c6f6917c6a08930a4",
```

Then run `yarn install`.
