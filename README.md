# Blockchain Project

## 프로젝트 개요

이 프로젝트는 간단한 블록체인 네트워크를 구축하기 위한 Node.js 애플리케이션입니다. 블록체인과 네트워크 노드 간의 상호작용을 다룹니다.

## 수정 사항

### 1. 예외 처리 코드 추가

현재 코드는 정상적인 케이스만 고려되어 있으므로, 예외 처리를 추가하여 예상치 못한 상황에 대한 대응을 할 수 있도록 하였습니다. 예외 처리를 중앙 집중화하여 유지보수를 용이하게 하기 위해 `errors.js` 파일을 추가하였습니다.

#### ✔ `errors.js` 파일

`errors.js` 파일은 다양한 예외를 정의하고, 이 예외들을 사용하여 다른 파일에서 일관되게 예외를 처리합니다.

#### ✔ blockchain.js 파일 수정 내용

blockchain.js 파일에서는 다양한 예외를 처리하도록 수정하였습니다. 각 함수에서 발생할 수 있는 예외 상황을 errors.js에서 정의한 예외 클래스를 사용하여 처리합니다.

1. `getLastBlock` 메서드에서 체인이 비어있는 경우 예외 처리 추가
2. `createNewTransaction` 메서드에서 트랜잭션 금액이 0 이하이거나 잔액이 부족한 경우 예외 처리 추가
3. `addTransactionToPendingTransactions` 메서드에서 트랜잭션 필드가 부족한 경우 예외 처리 추가
4. `chainIsValid` 메서드에서 블록체인이 배열 형식이 아닌 경우 예외 처리 추가
5. `getBlock` 메서드에서 블록 해시가 문자열이 아닌 경우 및 블록을 찾을 수 없는 경우 예외 처리 추가
6. `getTransaction` 메서드에서 트랜잭션 ID가 문자열이 아닌 경우 및 트랜잭션을 찾을 수 없는 경우 예외 처리 추가
7. `getAddressData` 메서드에서 주소가 문자열이 아닌 경우 예외 처리 추가

#### ✔ 네트워크 관련 예외 처리

networkNode.js 파일에서도 예외 처리를 강화하여 예외 상황에 대한 대응을 개선하였습니다.

1. 블록체인 정보를 가져올 때 예외 처리 추가
2. 트랜잭션 생성 시 예외 처리 추가
3. 트랜잭션 브로드캐스트 시 예외 처리 추가

### 2. 잔액 조회 코드 추가

코인 송금 전에 잔액을 조회하여 송금 가능 여부를 확인하는 코드를 추가하였습니다. 이 코드는 blockchain.js 파일의 createNewTransaction 메서드에 적용되었습니다.
