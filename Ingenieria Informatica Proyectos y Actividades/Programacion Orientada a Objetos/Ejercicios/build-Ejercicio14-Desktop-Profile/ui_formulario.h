/********************************************************************************
** Form generated from reading UI file 'formulario.ui'
**
** Created by: Qt User Interface Compiler version 5.14.1
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_FORMULARIO_H
#define UI_FORMULARIO_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QGridLayout>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_Formulario
{
public:
    QGridLayout *gridLayout;
    QLineEdit *LE_Nombre_2;
    QLineEdit *LE_Nombre;
    QPushButton *PB_Enviar;
    QLabel *L_Apellido;
    QLabel *L_Nombre;
    QLabel *L_Legajo;
    QLineEdit *LE_Apellido;

    void setupUi(QWidget *Formulario)
    {
        if (Formulario->objectName().isEmpty())
            Formulario->setObjectName(QString::fromUtf8("Formulario"));
        Formulario->resize(285, 214);
        gridLayout = new QGridLayout(Formulario);
        gridLayout->setObjectName(QString::fromUtf8("gridLayout"));
        LE_Nombre_2 = new QLineEdit(Formulario);
        LE_Nombre_2->setObjectName(QString::fromUtf8("LE_Nombre_2"));

        gridLayout->addWidget(LE_Nombre_2, 1, 1, 1, 2);

        LE_Nombre = new QLineEdit(Formulario);
        LE_Nombre->setObjectName(QString::fromUtf8("LE_Nombre"));

        gridLayout->addWidget(LE_Nombre, 0, 1, 1, 2);

        PB_Enviar = new QPushButton(Formulario);
        PB_Enviar->setObjectName(QString::fromUtf8("PB_Enviar"));

        gridLayout->addWidget(PB_Enviar, 4, 2, 1, 1);

        L_Apellido = new QLabel(Formulario);
        L_Apellido->setObjectName(QString::fromUtf8("L_Apellido"));

        gridLayout->addWidget(L_Apellido, 2, 0, 1, 1);

        L_Nombre = new QLabel(Formulario);
        L_Nombre->setObjectName(QString::fromUtf8("L_Nombre"));

        gridLayout->addWidget(L_Nombre, 1, 0, 1, 1);

        L_Legajo = new QLabel(Formulario);
        L_Legajo->setObjectName(QString::fromUtf8("L_Legajo"));

        gridLayout->addWidget(L_Legajo, 0, 0, 1, 1);

        LE_Apellido = new QLineEdit(Formulario);
        LE_Apellido->setObjectName(QString::fromUtf8("LE_Apellido"));

        gridLayout->addWidget(LE_Apellido, 2, 1, 1, 2);


        retranslateUi(Formulario);

        QMetaObject::connectSlotsByName(Formulario);
    } // setupUi

    void retranslateUi(QWidget *Formulario)
    {
        Formulario->setWindowTitle(QCoreApplication::translate("Formulario", "Form", nullptr));
        PB_Enviar->setText(QCoreApplication::translate("Formulario", "Enviar", nullptr));
        L_Apellido->setText(QCoreApplication::translate("Formulario", "Apellido", nullptr));
        L_Nombre->setText(QCoreApplication::translate("Formulario", "Nombre", nullptr));
        L_Legajo->setText(QCoreApplication::translate("Formulario", "Legajo", nullptr));
    } // retranslateUi

};

namespace Ui {
    class Formulario: public Ui_Formulario {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_FORMULARIO_H