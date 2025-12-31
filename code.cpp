#include <iostream>
#include <vector>
#include <string>
using namespace std;

// -------- GLOBAL VARIABLES --------
string documentText = "";               // current document
string originalDocument = "";           // first version
vector<string> undoStack;               // stack for undo
vector<string> redoStack;               // stack for redo
vector<string> versions;                // stores all versions


// -------- FUNCTIONS --------

void makeChange() {
    cout << "Enter new text: ";
    string newText;
    getline(cin, newText);

    undoStack.push_back(documentText);
    documentText = newText;
    redoStack.clear();
    versions.push_back(newText);

    cout << "Change applied.\n";
}

void undoAction() {
    if (undoStack.empty()) {
        cout << "Nothing to undo.\n";
        return;
    }
    redoStack.push_back(documentText);
    documentText = undoStack.back();
    undoStack.pop_back();

    cout << "Undo successful.\n";
}

void redoAction() {
    if (redoStack.empty()) {
        cout << "Nothing to redo.\n";
        return;
    }
    undoStack.push_back(documentText);
    documentText = redoStack.back();
    redoStack.pop_back();

    cout << "Redo successful.\n";
}

void displayDocument() {
    cout << "\nCurrent Document State:\n";
    cout << documentText << "\n\n";
}

void saveDocument() {
    undoStack.clear();
    redoStack.clear();
    cout << "Document saved. Undo/Redo history cleared.\n";
}

void showUndoHistory() {
    cout << "\nUndo History:\n";
    if (undoStack.empty()) {
        cout << "(Empty)\n";
        return;
    }
    int index = 1;
    for (int i = undoStack.size() - 1; i >= 0; i--) {
        cout << index++ << ". " << undoStack[i] << "\n";
    }
}

void showRedoHistory() {
    cout << "\nRedo History:\n";
    if (redoStack.empty()) {
        cout << "(Empty)\n";
        return;
    }
    int index = 1;
    for (int i = redoStack.size() - 1; i >= 0; i--) {
        cout << index++ << ". " << redoStack[i] << "\n";
    }
}

void revertToOriginal() {
    undoStack.push_back(documentText);
    documentText = originalDocument;
    redoStack.clear();
    cout << "Reverted to original document.\n";
}

void showAllVersions() {
    cout << "\nAll Versions of Document:\n";
    if (versions.empty()) {
        cout << "(No versions saved)\n";
        return;
    }
    for (int i = 0; i < versions.size(); i++) {
        cout << "Version " << i + 1 << ": " << versions[i] << "\n";
    }
}


// -------- MAIN MENU --------

int main() {
    cout << "Enter initial document text: ";
    getline(cin, documentText);

    originalDocument = documentText;
    versions.push_back(documentText);

    while (true) {
        cout << "\n------ TEXT EDITOR MENU ------\n";
        cout << "1. Make a Change\n";
        cout << "2. Undo\n";
        cout << "3. Redo\n";
        cout << "4. Display Document\n";
        cout << "5. Save Document (Clear history)\n";
        cout << "6. Show Undo History\n";
        cout << "7. Show Redo History\n";
        cout << "8. Revert to Original Document\n";
        cout << "9. Display All Versions\n";
        cout << "10. Exit\n";
        cout << "Enter your choice: ";

        int choice;
        cin >> choice;
        cin.ignore(); // to handle newline after entering choice

        switch (choice) {
            case 1: makeChange(); break;
            case 2: undoAction(); break;
            case 3: redoAction(); break;
            case 4: displayDocument(); break;
            case 5: saveDocument(); break;
            case 6: showUndoHistory(); break;
            case 7: showRedoHistory(); break;
            case 8: revertToOriginal(); break;
            case 9: showAllVersions(); break;
            case 10:
                cout << "Exiting...\n";
                return 0;
            default:
                cout << "Invalid choice. Try again.\n";
        }
    }
}
