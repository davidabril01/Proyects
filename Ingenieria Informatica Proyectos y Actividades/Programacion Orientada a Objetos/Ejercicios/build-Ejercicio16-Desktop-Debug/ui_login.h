/********************************************************************************
** Form generated from reading UI file 'login.ui'
**
** Created by: Qt User Interface Compiler version 5.14.1
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_LOGIN_H
#define UI_LOGIN_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QGridLayout>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QStatusBar>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_Login
{
public:
    QWidget *centralwidget;
    QGridLayout *gridLayout;
    QLineEdit *LE_Contra;
    QLabel *L_Usuario;
    QLineEdit *LE_Usuario;
    QLabel *L_Contra;
    QPushButton *PB_Iniciar;
    QMenuBar *menubar;
    QStatusBar *statusbar;

    void setupUi(QMainWindow *Login)
    {
        if (Login->objectName().isEmpty())
            Login->setObjectName(QString::fromUtf8("Login"));
        Login->resize(401, 192);
        centralwidget = new QWidget(Login);
        centralwidget->setObjectName(QString::fromUtf8("centralwidget"));
        gridLayout = new QGridLayout(centralwidget);
        gridLayout->setObjectName(QString::fromUtf8("gridLayout"));
        LE_Contra = new QLineEdit(centralwidget);
        LE_Contra->setObjectName(QString::fromUtf8("LE_Contra"));

        gridLayout->addWidget(LE_Contra, 1, 1, 1, 1);

        L_Usuario = new QLabel(centralwidget);
        L_Usuario->setObjectName(QString::fromUtf8("L_Usuario"));

        gridLayout->addWidget(L_Usuario, 0, 0, 1, 1);

        LE_Usuario = new QLineEdit(centralwidget);
        LE_Usuario->setObjectName(QString::fromUtf8("LE_Usuario"));

        gridLayout->addWidget(LE_Usuario, 0, 1, 1, 1);

        L_Contra = new QLabel(centralwidget);
        L_Contra->setObjectName(QString::fromUtf8("L_Contra"));

        gridLayout->addWidget(L_Contra, 1, 0, 1, 1);

        PB_Iniciar = new QPushButton(centralwidget);
        PB_Iniciar->setObjectName(QString::fromUtf8("PB_Iniciar"));

        gridLayout->addWidget(PB_Iniciar, 2, 2, 1, 1);

        Login->setCentralWidget(centralwidget);
        menubar = new QMenuBar(Login);
        menubar->setObjectName(QString::fromUtf8("menubar"));
        menubar->setGeometry(QRect(0, 0, 401, 22));
        Login->setMenuBar(menubar);
        statusbar = new QStatusBar(Login);
        statusbar->setObjectName(QString::fromUtf8("statusbar"));
        Login->setStatusBar(statusbar);

        retranslateUi(Login);

        QMetaObject::connectSlotsByName(Login);
    } // setupUi

    void retranslateUi(QMainWindow *Login)
    {
        Login->setWindowTitle(QCoreApplication::translate("Login", "Login", nullptr));
        L_Usuario->setText(QCoreApplication::translate("Login", "Usuario", nullptr));
        L_Contra->setText(QCoreApplication::translate("Login", "Contrase\303\261a", nullptr));
        PB_Iniciar->setText(QCoreApplication::translate("Login", "Iniciar", nullptr));
    } // retranslateUi

};

namespace Ui {
    class Login: public Ui_Login {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_LOGIN_H
